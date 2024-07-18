/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        YOUTUBE_API: process.env.YOUTUBE_API,
        YOUTUBE_ID: process.env.YOUTUBE_ID,
    },
};

export default nextConfig;
