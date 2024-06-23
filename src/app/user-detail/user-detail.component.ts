import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule]
})
export class UserDetailComponent implements OnInit {
  user: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const userId = params['id'];
      if (userId) {
        this.fetchUserDetails(userId);
      }
    });
  }

  fetchUserDetails(userId: string): void {
    this.http.get(`https://reqres.in/api/users/${userId}`)
      .subscribe((response: any) => {
        this.user = response.data;
      }, error => {
        console.error('Failed to fetch user details:', error);
      });
  }

  goBack(): void {
    window.history.back();
  }
}



