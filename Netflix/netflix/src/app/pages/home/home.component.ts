import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private movieService: MovieApiServiceService) { }

  bannerResults:any = [];
  trendingMovieResults:any = [];

  ngOnInit(): void {
    this.bannerData();
    this.trendingMovieData();
  }

  bannerData() {
    this.movieService.bannerApiData().subscribe(res => {
      // console.log("Movie Banner Data:", res);
      this.bannerResults = res.results;
    })
  }

  trendingMovieData() {
    this.movieService.trendingMovieApiData().subscribe(res => {
      // console.log('Trending Movies:', res);
      this.trendingMovieResults = res.results;
    })
  }

}
