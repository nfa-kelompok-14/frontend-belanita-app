import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BACKEND_URL;

export const getAllArticles = async () => {
    const response = await axios.get(`${API_BASE_URL}/article`);
    return response.data.data;
};

export const getArticleBySlug = async (slug) => {
    const response = await axios.get(`${API_BASE_URL}/article/${slug}`);
    return response.data.data;
};

export const createArticles = async (token, data) => {
    const response = await axios.post(`${API_BASE_URL}/article`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
        },
    });
    return response.data.data;
};

export const getRandomArticlesExceptSlug = async (slug, limit = 3) => {
    const response = await axios.get(`${API_BASE_URL}/article`);
    const allArticles = response.data.data;

    const filtered = allArticles.filter((item) => item.slug !== slug);

    const shuffled = filtered.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, limit);
};


export const deleteArticleById = async (id) => {
    return axios.delete(`${API_BASE_URL}/article/${id}`);
};


export const updateArticle = async (slug, token, data) => {
    const response = await axios.post(
        `${API_BASE_URL}/article/${slug}?_method=PUT`,
        data,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    );
    return response.data.data;
};

