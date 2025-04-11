import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private movieService: MovieApiServiceService,
    private route: ActivatedRoute ) { }

    movieDetailsResult: any;
    movieVideoResult: any;
    movieCastResult: any;

  ngOnInit(): void {
    let parmId = this.route.snapshot.paramMap.get('id');
    console.log('getParamId', parmId);
    this.getDetails(parmId);
    this.getVideo(parmId);
    this.getCast(parmId);
  }

getDetails(id: any) {
  this.movieService.getMovieDetails(id).subscribe(res => {
    this.movieDetailsResult = res;
  });
}

getVideo(id:any) {
  this.movieService.getMovieVideo(id).subscribe(res => {
    console.log('getVideo', res);
    res.results.forEach((element:any) => {
      if (element.type == 'Trailer') {
        this.movieVideoResult = element.key;
      }
    });
  })
}

getCast(id:any) {
  this.movieService.getMovieCast(id).subscribe(res => {
    // console.log('getCast', res);
    this.movieCastResult = res.cast;
  })
}

}
