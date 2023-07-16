<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class WebsiteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $socials = [
            [
                'name' => 'facebook',
                'link' => 'https://www.facebook.com/codingasik',
            ],
            [
                'name' => 'twitter',
                'link' => 'https://twitter.com/codingasik',
            ],
            [
                'name' => 'instagram',
                'link' => 'https://www.instagram.com/codingasik',
            ],
            [
                'name' => 'youtube',
                'link' => 'https://www.youtube.com/channel/UCQ6VgOYpWj0QY5Y1XRy2t5w',
            ],
        ];
        $about = "CodingAsik adalah sebuah website yang berisi tutorial pemrograman berbahasa Indonesia. CodingAsik berdiri pada tahun 2021 dengan tujuan untuk mempermudah para developer pemula dalam mempelajari pemrograman berbahasa Indonesia.";
        $contact = [
            [
                'name' => 'email',
                'value' => 'codingasik@gmail.com'
            ],
            [
                'name' => 'whatsapp',
                'value' => '6282298859671'
            ],
        ];

        \App\Models\Website::create([
            'name' => 'CodingAsik',
            'about' => $about,
            'address' => 'Jl. Raya Karehkel No. 9, Bogor, Jawa Barat',
            'socials' => json_encode($socials),
            'contact' => json_encode($contact),
        ]);
    }
}
