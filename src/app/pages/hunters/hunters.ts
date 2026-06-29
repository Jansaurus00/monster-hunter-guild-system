import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { Hunter } from '../../services/hunter-service';

@Component({
  selector: 'app-hunters',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hunters.html',
  styleUrl: './hunters.css',
})

export class Hunters implements OnInit {
  hunters: any[] = [];

  hunter = {
    name: '',
    rank: '',
    weapon: '',
    email: ''
  };

  selectedId: string = '';

  constructor(private hunterService: Hunter) {}

  ngOnInit(): void {
    this.loadHunters();
  }

  loadHunters() {
    this.hunterService.getHunters().subscribe({
      next: (data) => {
        this.hunters = data;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  addHunter() {
    this.hunterService.addHunters(this.hunter).subscribe({
      next: () => {
        this.loadHunters();

        this.hunter = {
          name: '',
          rank: '',
          weapon: '',
          email: ''
        };
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  deleteHunter(id: string) {
    this.hunterService.deleteHunters(id).subscribe({
      next: () => {
        this.loadHunters();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  editHunter(hunter: any) {
    this.selectedId = hunter._id;
    this.hunter = {
      name: hunter.name,
      rank: hunter.rank,
      weapon: hunter.weapon,
      email: hunter.email
    };
  }

  updateHunter() {
    this.hunterService.updateHunters(this.selectedId, this.hunter).subscribe({
      next: () => {
        this.loadHunters();
        this.selectedId = '';
        this.hunter = {
          name: '',
          rank: '',
          weapon: '',
          email: ''
        };
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
