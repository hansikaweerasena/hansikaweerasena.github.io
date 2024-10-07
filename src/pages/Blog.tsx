import React, { useState, useEffect } from 'react';

import { HanzCardArticleContainer } from "../common/HanzCardArticleContainer";
import {useTheme} from "../ThemeContext";
import axios from "axios";

export function Blog() {
    const [posts, setPosts] = useState([]);

    const { theme } = useTheme();

    const getPostData = () => {
        axios
            .get("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@hansikaweerasena")
            .then((res) => {
                setPosts(res.data.items);
            })
            .catch((error) => {
                console.error("Error fetching blog posts:", error);
            });
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
