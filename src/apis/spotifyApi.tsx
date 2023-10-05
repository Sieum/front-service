import {spotifyApiInstance} from './SpotifyApiInstance';

const api = spotifyApiInstance();

// 플레이리스트 상세 조회
export async function getPlaylistDetail(playlistId: string) {
  try {
    const response = await api.get(`/playlists/${playlistId}/tracks`);
    console.log('response.data : ', response.data);
    return response.data;
  } catch (error) {
    console.error('플레이리스트 상세를 가져오지 못했습니다 :', error);
    throw error;
  }
}

// 유저가 만든 플레이리스트 가져오기
export async function getMyPlaylists(userId: string) {
  try {
    const response = await api.get(`/users/${userId}/playlists`);
    console.log('response.data : ', response.data);
    return response.data;
  } catch (error) {
    console.error('나의 플레이리스트를 가져오지 못했습니다 :', error);
    throw error;
  }
}

// 유저의 플레이리스트 가져오기
export async function getAllPlaylists() {
  try {
    const response = await api.get(`/me/playlists`);
    console.log('response.data : ', response.data);
    return response.data;
  } catch (error) {
    console.error('나의 전체 플레이리스트를 가져오지 못했습니다 :', error);
    throw error;
  }
}

// 플레이리스트ID로 플레이리스트 가져오기
export async function getPlaylists(playlistId: string) {
  try {
    const response = await api.get(`/playlists/${playlistId}`);
    console.log('response.data : ', response.data);
    return response.data;
  } catch (error) {
    console.error('플레이리스트를 가져오지 못했습니다 :', error);
    throw error;
  }
}

// 가수명으로 조회
export async function searchItemByArtist(quary: string) {
  try {
    const response = await api.get(`/search?q=${quary}&type=artist`);
    console.log('response.data : ', response.data);
    return response.data;
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
    const response = await api.get(`/search?q=${quary}&type=track`);
    console.log('response.data : ', response.data);
    return response.data;
  } catch (error) {
    console.error('곡명 조회를 하지 못했습니다 :', error);
    throw error;
  }
}

export {searchItemByTrack};
