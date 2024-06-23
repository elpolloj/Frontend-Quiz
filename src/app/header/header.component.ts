import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterModule, CommonModule, MatToolbarModule, MatInputModule, MatFormFieldModule, MatIconModule]
})
export class HeaderComponent {
  constructor(private router: Router, private http: HttpClient) {}

  onSearch(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      const target = event.target as HTMLInputElement;
      const value = target?.value;
      const userId = Number(value);

      if (!isNaN(userId) && userId > 0) {
        this.http.get(`https://reqres.in/api/users/${userId}`).subscribe(
          (response: any) => {
            if (response.data) {
              this.router.navigate(['/user', userId]);
            } else {
              alert('User not found');
            }
          },
          error => {
            console.error('Failed to fetch user:', error);
          }
        );
      }
    }
  }
}
