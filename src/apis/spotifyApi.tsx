import axios from 'axios';

const SPOTIFY_API_BASE_URL = 'https://api.spotify.com/v1';

// 임시
const CLIENT_ID = '65ca60eaf84a439384e39b7621647578';
const CLIENT_SECRET = '25eeae203b2f4d34863c4e38626e1c9f';

// 액세스 토큰을 얻기 위한 함수
async function getAccessToken() {
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
    return response.data.access_token;
    } catch (error) {
    console.error('Error getting access token:', error);
    throw error;
    }
}

async function getPlaylists(playlistId: string) {
    try {
    // 액세스 토큰을 얻습니다.
    const accessToken = await getAccessToken();

    // API 요청을 보낼 때 액세스 토큰을 헤더에 포함합니다.
    const headers = {
        Authorization: `Bearer ${accessToken}`,
    };

    // 플레이리스트 목록을 가져오는 API 엔드포인트에 GET 요청을 보냅니다.
    const response = await axios.get(`${SPOTIFY_API_BASE_URL}/playlists/${playlistId}`, {
        headers,
    });

    // 응답 데이터를 반환합니다.
    return response.data;
    } catch (error) {
    console.error('Error getting playlists:', error);
    throw error;
    }
}

export { getPlaylists };