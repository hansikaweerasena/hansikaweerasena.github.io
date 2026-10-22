import React, { useEffect, useMemo, useState } from 'react';
import axios from "axios";
import savedPosts from '../data/blog.json';
import {useTheme} from "../ThemeContext";

interface BlogPost {
    title: string;
    pubDate: string;
    link: string;
    guid: string;
    author?: string;
    thumbnail?: string;
    description?: string;
    content: string;
    categories?: string[];
}

interface BlogMonthGroup {
    id: string;
    year: string;
    month: string;
    label: string;
    posts: BlogPost[];
}

const authorImage = "https://cdn-images-1.medium.com/fit/c/150/150/1*FrxzYzpSRpb8Soompovl1w.png";
const placeholderImage = "https://via.placeholder.com/300";

export function Blog() {
    const [posts, setPosts] = useState<BlogPost[]>(savedPosts);
    const [loading, setLoading] = useState(savedPosts.length === 0);
    const [loadFailed, setLoadFailed] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        const controller = new AbortController();
        axios
            .get("https://api.rss2json.com/v1/api.json", {
                params: { rss_url: 'https://medium.com/feed/@hansikaweerasena' },
                timeout: 10000,
                signal: controller.signal,
            })
            .then((res) => {
                if (res.data.status !== 'ok' || !Array.isArray(res.data.items) ||
                    res.data.items.length === 0 || res.data.items.some((post: BlogPost) =>
                        !post.title || !post.link || !Number.isFinite(Date.parse(post.pubDate)))) {
                    throw new Error('Invalid blog feed response');
                }
                if (!controller.signal.aborted) {
                    setPosts(res.data.items.map((post: BlogPost) => ({
                        ...post,
                        content: post.content || post.description || '',
                    })));
                }
            })
            .catch((error) => {
                if (controller.signal.aborted) return;
                setLoadFailed(true);
                console.error("Error fetching blog posts:", error);
            })
            .finally(() => {
                if (!controller.signal.aborted) setLoading(false);
            });
        return () => controller.abort();
    }, []);

    const extractImageFromContent = (content: string): string | null => {
        const imgTagMatch = content.match(/<img[^>]+src="([^">]+)"/);
        return imgTagMatch ? imgTagMatch[1] : null;
    };

    const extractFirstParagraph = (content: string): string => {
        const paragraphMatch = content.match(/<p[^>]*>(.*?)<\/p>/);
        if (paragraphMatch) {
            const paragraphText = paragraphMatch[1].replace(/<[^>]*>/g, '');
            return paragraphText.length > 260 ? `${paragraphText.substring(0, 260)}...` : paragraphText;
        }
        return '';
    };

    const formatDate = (dateString: string, options: Intl.DateTimeFormatOptions) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', options);
    };

    const monthGroups = useMemo<BlogMonthGroup[]>(() => {
        const sortedPosts = [...posts].sort((first, second) =>
            new Date(second.pubDate).getTime() - new Date(first.pubDate).getTime()
        );

        const groups = new Map<string, BlogMonthGroup>();

        sortedPosts.forEach((post) => {
            const date = new Date(post.pubDate);
            const year = String(date.getFullYear());
            const month = date.toLocaleDateString('en-US', { month: 'long' });
            const monthNumber = String(date.getMonth() + 1).padStart(2, '0');
            const id = `blog-${year}-${monthNumber}`;

            if (!groups.has(id)) {
                groups.set(id, {
                    id,
                    year,
                    month,
                    label: `${month} ${year}`,
                    posts: [],
                });
            }

            groups.get(id)?.posts.push(post);
        });

        return Array.from(groups.values());
    }, [posts]);

    const archiveYears = useMemo(() => {
        const years = new Map<string, BlogMonthGroup[]>();

        monthGroups.forEach((group) => {
            if (!years.has(group.year)) {
                years.set(group.year, []);
            }

            years.get(group.year)?.push(group);
        });

        return Array.from(years.entries());
    }, [monthGroups]);

    return (
        <div className="container hanz-page hanz-blog-page">
            <header className="hanz-page-header">
                <h1>Blog</h1>
            </header>

            <div className="hanz-blog-layout">
                <main className="hanz-blog-posts" aria-label="Blog posts">
                    {posts.length === 0 && (
                        <p role="status">
                            {loading ? 'Loading posts...' : loadFailed ? 'Posts could not be loaded. ' : 'No posts yet. '}
                            {!loading && <a href="https://medium.com/@hansikaweerasena" target="_blank" rel="noopener noreferrer">Read on Medium</a>}
                        </p>
                    )}
                    {monthGroups.map((group) => (
                        <section id={group.id} className="hanz-blog-month-section" key={group.id}>
                            <h2 className="hanz-page-section-title">{group.label}</h2>
                            {group.posts.map((post) => (
                                <article className={`container shadow-sm hanz-container hanz-blog-post bg-${theme} text-${theme === 'light' ? 'dark' : 'white'}`} key={post.guid || post.link}>
                                    <a className="hanz-blog-image-link" href={post.link} target="_blank" rel="noopener noreferrer">
                                        <img
                                            className="hanz-blog-post-image"
                                            src={extractImageFromContent(post.content) || post.thumbnail || placeholderImage}
                                            alt={post.title}
                                        />
                                    </a>
                                    <div className="hanz-blog-post-body">
                                        <p className="hanz-blog-post-date">
                                            {formatDate(post.pubDate, { year: 'numeric', month: 'short', day: 'numeric' })}
                                        </p>
                                        <h3 className="hanz-blog-post-title">
                                            <a href={post.link} target="_blank" rel="noopener noreferrer">{post.title}</a>
                                        </h3>
                                        <p className="hanz-blog-post-text">{extractFirstParagraph(post.content)}</p>
                                        {post.categories && post.categories.length > 0 && (
                                            <div className="hanz-blog-category-list">
                                                {post.categories.map((category) => (
                                                    <span className="badge hanz-blog-category" key={`${post.guid}-${category}`}>{category}</span>
                                                ))}
                                            </div>
                                        )}
                                        <div className="hanz-blog-post-footer">
                                            <div className="hanz-blog-author">
                                                <img src={authorImage} alt="Hansika Weerasena" />
                                                <span>Hansika Weerasena</span>
                                            </div>
                                            <a className="hanz-blog-read-link" href={post.link} target="_blank" rel="noopener noreferrer">
                                                Read article
                                            </a>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </section>
                    ))}
                </main>

                <aside className={`hanz-blog-archive text-${theme === 'light' ? 'dark' : 'white'}`} aria-label="Blog archive">
                    <h2 className="hanz-blog-archive-title">Archive</h2>
                    {archiveYears.length > 0 ? (
                        archiveYears.map(([year, groups]) => (
                            <div className="hanz-blog-archive-year" key={year}>
                                <h3>{year}</h3>
                                <ul>
                                    {groups.map((group) => (
                                        <li key={group.id}>
                                            <a href={`#${group.id}`}>{group.month}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    ) : (
                        <p className="hanz-blog-empty">{loading ? 'Loading posts...' : 'No archived posts available.'}</p>
                    )}
                </aside>
            </div>
        </div>
    );
}
