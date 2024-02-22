import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from '../../service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private service:MovieApiServiceService) { }

  bannerResult:any=[];
  trendingMovieResult:any=[];
  actionMovieResult:any=[];
  adventureMovieResult:any=[];
  animationMovieResult:any=[];
  comedyMovieResult:any=[];
  documentaryMovieResult:any=[];
  scifiMovieResult:any=[];
  thrillerMovieResult:any=[];

  ngOnInit(): void {
      this.bannerData();
      this.trendingData();
      this.actionMovie();
      this.adventureMovie();
      this.comedyMovie();
      this.animationMovie();
      this.documentaryMovie();
      this.scifiMovie();
      this.thrillerMovie();
  }

  // bannerdata
  bannerData(){
    this.service.bannerApiData().subscribe((result)=>{
      console.log(result, 'bannerresult#');
      this.bannerResult = result.results;
    });
  }

  // trendingdata
  trendingData(){
    this.service.trendingMovieApiData().subscribe((result)=>{
      console.log(result,'trendingresult#');
      this.trendingMovieResult = result.results;
    });
  }

  // action
  actionMovie() {
    this.service.fetchActionMovies().subscribe((result) => {
      // console.log(result,'actionmovies#');
      this.actionMovieResult = result.results;
    });
  }

  // adventure
  adventureMovie() {
    this.service.fetchAdventureMovies().subscribe((result) => {
      this.adventureMovieResult = result.results;
    });
  }

  // animation
  animationMovie() {
    this.service.fetchAnimationMovies().subscribe((result) => {
      this.animationMovieResult = result.results;
    })
  }

  // comedy
  comedyMovie() {
    this.service.fetchComedyMovies().subscribe((result) => {
      this.comedyMovieResult = result.results;
    })
  }

  // documentary
  documentaryMovie() {
    this.service.fetchDocumentaryMovies().subscribe((result) => {
      this.documentaryMovieResult = result.results;
    })
  }

  // sci-fi
  scifiMovie() {
    this.service.fetchSciFiMovies().subscribe((result) => {
      this.scifiMovieResult = result.results;
    })
  }

  // thriller
  thrillerMovie() {
    this.service.fetchThrillerMovies().subscribe((result) => {
      this.thrillerMovieResult = result.results;
    })
  }

}


