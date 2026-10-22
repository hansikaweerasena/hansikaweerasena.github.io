import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import { Blog } from './Blog';
import savedPosts from '../data/blog.json';

jest.mock('axios', () => ({ __esModule: true, default: { get: jest.fn() } }));
const get = axios.get as jest.Mock;

afterEach(() => jest.restoreAllMocks());

test('keeps saved posts visible when the feed service is blocked', async () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
    get.mockRejectedValue(new Error('HTTP 403'));
    render(<Blog />);
    expect(screen.getByRole('heading', { name: savedPosts[0].title })).toBeInTheDocument();
    await waitFor(() => expect(console.error).toHaveBeenCalled());
    expect(screen.getAllByRole('article')).toHaveLength(savedPosts.length);
    expect(screen.queryByText('Loading posts...')).not.toBeInTheDocument();
});

test('does not erase saved posts when the service returns an invalid response', async () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
    get.mockResolvedValue({ data: { status: 'error', message: 'Feed unavailable' } });
    render(<Blog />);
    await waitFor(() => expect(console.error).toHaveBeenCalled());
    expect(screen.getAllByRole('article')).toHaveLength(savedPosts.length);
});

test('refreshes saved posts when the live feed succeeds', async () => {
    get.mockResolvedValue({ data: { status: 'ok', items: [{
        title: 'New Medium post', pubDate: '2026-10-21T12:00:00Z',
        link: 'https://medium.com/p/new', guid: 'new', description: '<p>New excerpt</p>',
    }] } });
    render(<Blog />);
    expect(await screen.findByRole('heading', { name: 'New Medium post' })).toBeInTheDocument();
    expect(screen.getByText('New excerpt')).toBeInTheDocument();
    expect(screen.getAllByRole('article')).toHaveLength(1);
});
