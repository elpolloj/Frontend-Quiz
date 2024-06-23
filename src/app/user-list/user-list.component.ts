import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { CacheService } from '../cache.service';
import { slideInAnimation } from '../animation';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatPaginatorModule],
  animations: [slideInAnimation]
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  totalUsers: number = 0;
  pageSize: number = 6;
  currentPage: number = 0;

  constructor(private http: HttpClient, private router: Router, private cacheService: CacheService) {}

  ngOnInit(): void {
    this.fetchUsers(this.currentPage + 1);
  }

  fetchUsers(page: number): void {
    const url = `https://reqres.in/api/users?page=${page}`;
    const cachedData = this.cacheService.get(url);
    if (cachedData) {
      this.users = cachedData.data;
      this.totalUsers = cachedData.total;
    } else {
      this.http.get(url).subscribe((response: any) => {
        this.users = response.data;
        this.totalUsers = response.total;
        this.cacheService.set(url, response);
      }, error => {
        console.error('Failed to fetch users:', error);
      });
    }
  }

  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.fetchUsers(this.currentPage + 1);
  }

  viewUser(id: number): void {
    this.router.navigate(['/user', id]);
  }
}
