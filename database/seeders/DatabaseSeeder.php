<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Serie;
use App\Models\Topic;
use App\Models\User;
use App\Models\Video;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $this->call([
            PackagePricesSeeder::class,
            WebsiteSeeder::class,
        ]);

        User::create([
            'name' => 'Mpedia',
            'username' => 'mpedia',
            'email' => 'admin@gmail.com',
            'password' => bcrypt('12345678'),
            'is_admin' => true,


        ]);

        $topic = array(
            "HTML" => array(
              "HTML Fundamental",
              "HTML5: Advanced Techniques",
              "Creating Interactive Web Pages with HTML",
              "HTML Email Design and Development",
              "Building Responsive Websites with HTML and CSS",
            ),
            "CSS" => array(
              "CSS Fundamental",
              "CSS3: Styling Modern Websites",
              "Advanced CSS Layouts and Effects",
              "Responsive Design with CSS Frameworks",
              "SASS/SCSS: Mastering CSS Preprocessing",
            ),
            "JavaScript" => array(
              "JavaScript Fundamental",
              "Modern JavaScript ES6+",
              "DOM Manipulation and Events",
              "Async Programming with Promises and Async/Await",
              "Building Web Applications with React",
              "Building Web Applications with Vue.js",
            ),
            "PHP" => array(
              "PHP Fundamental",
              "Object-Oriented PHP",
              "Creating RESTful APIs with PHP",
              "Building Web Applications with Laravel",
              "PHP Security Best Practices",
            ),
            "Python" => array(
              "Python Fundamental",
              "Data Analysis with Python",
              "Building Web Applications with Django",
              "Web Scraping with Python",
              "Python for Machine Learning",
            ),
            "Ruby" => array(
              "Ruby Fundamental",
              "Ruby on Rails: Building Web Applications",
              "Testing Rails Applications with RSpec",
              "Ruby Gems: Creating and Publishing",
            ),
          );

          $colors = array(
            'FF5733',
            'FFC300',
            'DAF7A6',
            'FFC2D2',
            'C70039',
            '900C3F',
            '581845',
            '900D0D',
            'FF7F50',
            '4CAF50'
        );


          foreach ($topic as $top => $value ) {
          
              $color = $colors[rand(1,9)];
              $crtop = Topic::create([
                    'name' => $top,
                    'type' => "serie",
                    'slug' => Str::slug($top),
                    'description' => "Belajar $top menjadi lebih asik , terstruktur dan mudah di pahami",
                    'image' => "https://via.placeholder.com/100x100/$color/FFFFFF?text=$top"
              ]);
              
              foreach ($value as $serie ) {
               
                $c = $colors[rand(1,9)];
                 $ser = Serie::create([
                    'slug' => Str::slug($serie),
                    'title' => $serie,
                    'description' => 'Video ini hanya contoh dan bersumber dari sumber external.',
                    'image' => "https://via.placeholder.com/1280x720/$c/FFFFFF?text=$serie",
                    'status' => 'published'
                  ]);
                  $ser->topics()->sync($crtop);
              }
          }



          Serie::all()->map(function ($s)  {
                for ($i=1; $i < 10; $i++) { 
                    $s->videos()->create([
                        'title' => "Video ke $i",
                        'unique_video_id' => 'JmPgWUd896g',
                        'order_num' => $i,
                        'seconds_time' => 1250,
                        'description' => "Ini hanya video dummy.",
                        'is_free' => rand(0,1),
                        


                    ]);
                }
          });
          


            Cache::clear();
   
    
    }
}
