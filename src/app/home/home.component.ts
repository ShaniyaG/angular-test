import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../loader.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  items: any;
  loading: boolean;
  constructor(
    public userService: UserService,
    private loaderServce: LoaderService
  ) {
    this.loaderServce.isLoading.subscribe((res) => {
      this.loading = res;
    });
  }

  ngOnInit() {
    this.userService.getUserDetails().subscribe((res) => {
      this.items = res['entries'];
    });
  }
}
