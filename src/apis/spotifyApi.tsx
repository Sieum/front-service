import axios from 'axios';

const SPOTIFY_API_BASE_URL = 'https://api.spotify.com/v1';

// 임시
const CLIENT_ID = '65ca60eaf84a439384e39b7621647578';
const CLIENT_SECRET = '25eeae203b2f4d34863c4e38626e1c9f';

// 액세스 토큰을 얻기 위한 함수
export async function getAccessToken() {
    try {
    // Spotify API 인증 흐름 중 하나를 사용하여 액세스 토큰을 발급받습니다.
    const response = await axios.post(
        'https://accounts.spotify.com/api/token',
        `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
        {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        }
    );

    // 발급된 액세스 토큰을 반환합니다.
    console.log(response.data.access_token);
    return response.data.access_token;
    } catch (error) {
    console.error('Error getting access token:', error);
    throw error;
    }
}

// 플레이리스트 상세 조회
export async function getPlaylistDetail(playlistId: string) {
    try {
    const accessToken = await getAccessToken();

    const headers = {
        Authorization: `Bearer ${accessToken}`,
    };

    const response = await axios.get(`${SPOTIFY_API_BASE_URL}/playlists/${playlistId}/tracks`, {
        headers,
    });

    console.log(response.data);
    return response.data;
    } catch (error) {
    console.error('플레이리스트 상세를 가져오지 못했습니다 :', error);
    throw error;
    }
}

// 유저가 만든 플레이리스트 가져오기
export async function getMyPlaylists(userId: string) {
    try {
    const accessToken = await getAccessToken();

    const headers = {
        Authorization: `Bearer ${accessToken}`,
    };

    const response = await axios.get(`${SPOTIFY_API_BASE_URL}/users/${userId}/playlists`, {
        headers,
    });

    console.log(response.data);
    return response.data;
    } catch (error) {
    console.error('나의 플레이리스트를 가져오지 못했습니다 :', error);
    throw error;
    }
}

// 유저의 플레이리스트 가져오기
export async function getAllPlaylists() {
    try {
    const accessToken = await getAccessToken();

    const headers = {
        Authorization: `Bearer ${accessToken}`,
    };

    const response = await axios.get(`${SPOTIFY_API_BASE_URL}/me/playlists`, {
        headers,
    });

    console.log(response.data);
    return response.data;
    } catch (error) {
    console.error('나의 전체 플레이리스트를 가져오지 못했습니다 :', error);
    throw error;
    }
}

// 플레이리스트ID로 플레이리스트 가져오기
export async function getPlaylists(playlistId: string) {
    try {
    const accessToken = await getAccessToken();

    const headers = {
        Authorization: `Bearer ${accessToken}`,
    };

    const response = await axios.get(`${SPOTIFY_API_BASE_URL}/playlists/${playlistId}`, {
        headers,
    });

    console.log(response.data);
    return response.data;
    } catch (error) {
    console.error('플레이리스트를 가져오지 못했습니다 :', error);
    throw error;
    }
}

// 가수명으로 조회
export async function searchItemByArtist(quary: string) {

    try {
    const accessToken = await getAccessToken();

    const headers = {
        Authorization: `Bearer ${accessToken}`,
    };

    await axios.get(`${SPOTIFY_API_BASE_URL}/search?q=${quary}&type=artist`, {
        headers,
    })
    .then(response => {
        console.log(response.data);
        return response.data;
    });

    } catch (error) {
    console.error('가수명 조회를 하지 못했습니다 :', error);
    throw error;
    }
}

// 곡명으로 조회
async function searchItemByTrack(quary: string) {
    // interface SpotifySearchResponse {
    //     tracks?: {
    //     href?: string;
    //     items?: {
    //         album?: {
    //         album_type?: string;
    //         artists?: {
    //             external_urls?: {
    //             spotify?: string;
    //             };
    //             href?: string;
    //             id?: string;
    //             name?: string;
    //             type?: string;
    //             uri?: string;
    //         }[];
    //         external_urls?: {
    //             spotify?: string;
    //         };
    //         href?: string;
    //         id?: string;
    //         images?: {
    //             height?: number;
    //             url?: string;
    //             width?: number;
    //         }[];
    //         is_playable?: boolean;
    //         name?: string;
    //         release_date?: string;
    //         release_date_precision?: string;
    //         total_tracks?: number;
    //         type?: string;
    //         uri?: string;
    //         };
    //         artists?: {
    //         external_urls?: {
    //             spotify?: string;
    //         };
    //         href?: string;
    //         id?: string;
    //         name?: string;
    //         type?: string;
    //         uri?: string;
    //         }[];
    //         disc_number?: number;
    //         duration_ms?: number;
    //         explicit?: boolean;
    //         external_ids?: {
    //         isrc?: string;
    //         };
    //         external_urls?: {
    //         spotify?: string;
    //         };
    //         href?: string;
    //         id?: string;
    //         is_local?: boolean;
    //         is_playable?: boolean;
    //         name?: string;
    //         popularity?: number;
    //         preview_url?: string | null;
    //         track_number?: number;
    //         type?: string;
    //         uri?: string;
    //     }[];
    //     };
    //     limit?: number;
    //     next?: string | null;
    //     offset?: number;
    //     previous?: string | null;
    //     total?: number;
    // }

    try {
    const accessToken = await getAccessToken();

    const headers = {
        Authorization: `Bearer ${accessToken}`,
    };

    const response = await axios.get(`${SPOTIFY_API_BASE_URL}/search?q=${quary}&type=track`, {
        headers,
    });

    return response.data;
    } catch (error) {
    console.error('곡명 조회를 하지 못했습니다 :', error);
    throw error;
    }
}
export { searchItemByTrack };