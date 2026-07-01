import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weapons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weapons.html',
  styleUrl: './weapons.css',
})

export class Weapons {

  weapons = [
    {
      name: 'Great Sword',
      difficulty: 'Intermediate',
      role: 'Heavy Damage',
      description: 'Slow but devastating weapon capable of massive charged attacks.',
      image: '/images/weapons/greatsword.png'
    },
    {
      name: 'Longsword',
      difficulty: 'Intermediate',
      role: 'Counter Specialist',
      description: 'A balanced weapon with fluid combos and Spirit Gauge attacks.',
      image: '/images/weapons/longsword.png'
    },
    {
      name: 'Sword & Shield',
      difficulty: 'Beginner',
      role: 'Balanced',
      description: 'Versatile Weapon that allows item usage without sheathing.',
      image: '/images/weapons/swordandshield.png'
    },
    {
      name: 'Dual Blades',
      difficulty: 'Beginner',
      role: 'Fast DPS',
      description: 'Rapid attacks powered by Demon Mode.',
      image: '/images/weapons/dualblades.png'
    },
    {
      name: 'Hammer',
      difficulty: 'Intermediate',
      role: 'Stun Damage',
      description: 'Powerful blunt weapon specialized in knocking monsters unconscious.',
      image: '/images/weapons/hammer.png'
    },
    {
      name: 'Hunting Horn',
      difficulty: 'Advanced',
      role: 'Support',
      description: 'Buff teammates with melodies while attacking monsters.',
      image: '/images/weapons/huntinghorn.png'
    },
    {
      name: 'Lance',
      difficulty: 'Intermediate',
      role: 'Defense',
      description: 'Exceptional guarding abilities with precise thrust attacks.',
      image: '/images/weapons/lance.png'
    },
    {
      name: 'Gunlance',
      difficulty: 'Advanced',
      role: 'Explosive Defense',
      description: 'A lance equipped with explosive shells.',
      image: '/images/weapons/gunlance.png'
    },
    {
      name: 'Switch Axe',
      difficulty: 'Advanced',
      role: 'Morph Weapon',
      description: 'Transforms between Axe and Sword modes.',
      image: '/images/weapons/switchaxe.png'
    },
    {
      name: 'Charge Blade',
      difficulty: 'Expert',
      role: 'Technical',
      description: 'Stores energy in Sword mode and unleashes it in Axe mode.',
      image: '/images/weapons/chargeblade.png'
    },
    {
      name: 'Insect Glaive',
      difficulty: 'Advanced',
      role: 'Aerial Combat',
      description: 'Fight alongside Kinsects while vaulting and attacking through the air.',
      image: '/images/weapons/insectglaive.png'
    },
    {
      name: 'Light Bowgun',
      difficulty: 'Intermediate',
      role: 'Ranged',
      description: 'Highly mobile ranged weapon with various ammo types.',
      image: '/images/weapons/lightbowgun.png'
    },
    {
      name: 'Heavy Bowgun',
      difficulty: 'Advanced',
      role: 'Heavy Artillery',
      description: 'Powerful ranged weapon with devastating firepower.',
      image: '/images/weapons/heavybowgun.png'
    },
    {
      name: 'Bow',
      difficulty: 'Advanced',
      role: 'Agile Ranged',
      description: 'Fast ranged weapon using coatings and charged shots.',
      image: 'images/weapons/bow.png'
    }
  ];
}
