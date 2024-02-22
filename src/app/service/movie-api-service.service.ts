import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http:HttpClient) { }

  baseurl = "https://api.themoviedb.org/3";
  apiKey = "e6d86fb3169b4f457f2c2eef561fc2f6";

  // bannerapidata
  bannerApiData():Observable<any>{
    return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apiKey}`);
  }

  // trendingmovieapidata
  trendingMovieApiData():Observable<any>{
    return this.http.get(`${this.baseurl}/trending/movie/day?api_key=${this.apiKey}`);
  }
  
  // getsearchmovie
  getSearchMovie(data:any):Observable<any>{
    console.log(data,'movie#');
    return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apiKey}&query=${data.movieName}`);
  }

  // getmoviedetails
  getMovieDetails(data:any):Observable<any>{
    return this.http.get(`${this.baseurl}/movie/${data}?api_key=${this.apiKey}`);
  }

  // getmovievideo
  getMovieVideo(data:any):Observable<any>{
    return this.http.get(`${this.baseurl}/movie/${data}/videos?api_key=${this.apiKey}`);
  }

  // getmoviecast
  getMovieCast(data:any):Observable<any>{
    return this.http.get(`${this.baseurl}/movie/${data}/credits?api_key=${this.apiKey}`);
  }
  
  // Genres

  // Action Genre
  fetchActionMovies():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=28`);
  }

  // Adventure Genre
  fetchAdventureMovies():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=12`);
  }

  // Animation Genre
  fetchAnimationMovies():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=16`);
  }

  // Comedy Genre
  fetchComedyMovies():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=35`);
  }

  // Documentary Genre
  fetchDocumentaryMovies():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=99`);
  }

  // Sci-fi Genre
  fetchSciFiMovies():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=878`);
  }

  // Thriller Genre
  fetchThrillerMovies():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=53`);
  }

}










