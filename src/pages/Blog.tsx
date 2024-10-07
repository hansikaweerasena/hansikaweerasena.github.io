import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { XMLParser } from 'fast-xml-parser';
import { HanzCardArticleContainer } from "../common/HanzCardArticleContainer";
import {useTheme} from "../ThemeContext";

interface RssItem {
    title: string;
    pubDate: string;
    link: string;
    guid: string;
    "dc:creator"?: string;
    description: string;
}
export function Blog() {
    const [posts, setPosts] = useState<Array<{
        title: string,
        pubDate: string,
        link: string,
        guid: string,
        author: string,
        thumbnail: string,
        description: string
    }>>([]);

    const { theme } = useTheme();

    const getPostData = async () => {
        try {
            const response = await axios.get('https://medium.com/feed/@hansikaweerasena', {
                headers: {
                    'Content-Type': 'application/xml',
                },
            });

            const parser = new XMLParser({
                ignoreAttributes: false,
                attributeNamePrefix: "@_"
            });
            const parsedResult = parser.parse(response.data);

            const items: RssItem[] = parsedResult.rss.channel.item;
            const formattedPosts = items.map((item: RssItem) => ({
                title: item.title,
                pubDate: item.pubDate,
                link: item.link,
                guid: item.guid,
                author: item["dc:creator"] || "",
                thumbnail: "", // You can add logic to extract the thumbnail if needed
                description: item.description
            }));

            setPosts(formattedPosts);
        } catch (error) {
            console.error("Error fetching blog posts:", error);
        }
    };

    useEffect(() => {
        getPostData();
    }, []);

    // Function to extract the first image URL from content
    const extractImageFromContent = (content: string): string | null => {
        const imgTagMatch = content.match(/<img[^>]+src="([^">]+)"/);
        return imgTagMatch ? imgTagMatch[1] : null; // Return the image URL or null if not found
    };

    // Function to extract the first 250 characters from the first <p> tag
    const extractFirstParagraph = (content: string): string => {
        const paragraphMatch = content.match(/<p[^>]*>(.*?)<\/p>/);
        if (paragraphMatch) {
            const paragraphText = paragraphMatch[1].replace(/<[^>]*>/g, ''); // Remove any nested HTML tags
            return paragraphText.length > 250 ? `${paragraphText.substring(0, 250)}...` : paragraphText;
        }
        return '';
    };

    // Function to extract and format the date
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short' };
        return date.toLocaleDateString('en-US', options); // Format: "Oct, 2024"
    };

    return (
            <div className={`container`}>
                <div className={`row`}>
                    <div className="row">
                        {posts.map((post: any, index: React.Key) => (
                                <HanzCardArticleContainer
                                key={`post-${index}`}
                                img={extractImageFromContent(post.content) || "https://via.placeholder.com/300"}
                                title={post.title}
                                date={formatDate(post.pubDate)}
                                categories={post.categories}
                                text={extractFirstParagraph(post.content)}
                                articleLink={post.link}
                                author="Hansika Weerasena"
                                authorImage="https://cdn-images-1.medium.com/fit/c/150/150/1*FrxzYzpSRpb8Soompovl1w.png"
                                />
                                ))}
                    </div>
                </div>
            </div>
    );
}
