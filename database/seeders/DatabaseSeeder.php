<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Article;
use App\Models\Serie;
use App\Models\Topic;
use App\Models\User;
use App\Models\Video;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;
use Faker;
use Google_Client;
use Illuminate\Support\Facades\Http;
use Sunra\PhpSimple\HtmlDomParser;


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

        // $this->call([
        //     PackagePricesSeeder::class,
        //     WebsiteSeeder::class,
        // ]);

        // User::create([
        //     'name' => 'Mpedia',
        //     'username' => 'mpedia',
        //     'email' => 'admin@gmail.com',
        //     'password' => bcrypt('12345678'),
        //     'is_admin' => true,


        // ]);

        $topic = [
            // "HTML" => [
            //     "HTML Fundamental",
            //     "HTML5: Advanced Techniques",
            //     "Creating Interactive Web Pages with HTML",
            //     "HTML Email Design and Development",
            //     "Building Responsive Websites with HTML and CSS",
            //     "Semantic HTML",
            //     "Accessibility in HTML",
            //     "Best Practices for HTML Development",
            // ],
            // "CSS" => [
            //     "CSS Fundamental",
            //     "CSS3: Styling Modern Websites",
            //     "Advanced CSS Layouts and Effects",
            //     "Responsive Design with CSS Frameworks",
            //     "SASS/SCSS: Mastering CSS Preprocessing",
            //     "Flexbox and Grid Layouts",
            //     "Animation and Transitions in CSS",
            //     "Cross-Browser Compatibility with CSS",
            // ],
            // "JavaScript" => [
            //     "JavaScript Fundamental",
            //     "Modern JavaScript ES6+",
            //     "DOM Manipulation and Events",
            //     "Async Programming with Promises and Async/Await",
            //     "Building Web Applications with React",
            //     "Building Web Applications with Vue.js",
            //     "JavaScript Design Patterns",
            //     "Testing JavaScript Applications",
            // ],
            // "PHP" => [
            //     "PHP Fundamental",
            //     "Object-Oriented PHP",
            //     "Creating RESTful APIs with PHP",
            //     "Building Web Applications with Laravel",
            //     "PHP Security Best Practices",
            //     "Database Interactions with PHP",
            //     "Working with Composer in PHP",
            //     "Unit Testing in PHP",
            // ],
            // "Python" => [
            //     "Python Fundamental",
            //     "Data Analysis with Python",
            //     "Building Web Applications with Django",
            //     "Web Scraping with Python",
            //     "Python for Machine Learning",
            //     "Python GUI Development",
            //     "Python Websockets",
            //     "Python Concurrency and Parallelism",
            // ],
            // "Ruby" => [
            //     "Ruby Fundamental",
            //     "Ruby on Rails: Building Web Applications",
            //     "Testing Rails Applications with RSpec",
            //     "Ruby Gems: Creating and Publishing",
            //     "Ruby Metaprogramming",
            //     "Background Processing in Rails",
            //     "API Development with Rails",
            //     "Securing Ruby on Rails Applications",
            // ],
            // "Java" => [
            //     "Java Fundamental",
            //     "Object-Oriented Programming in Java",
            //     "Java GUI Development",
            //     "Java Servlets and JSP",
            //     "Java Spring Framework",
            //     "Android App Development with Java",
            //     "Java Performance Optimization",
            //     "Java Multithreading and Concurrency",
            // ],

            // "Go" => [
            //     "Go Fundamental",
            //     "Web Development with Go",
            //     "Building RESTful APIs with Go",
            //     "Concurrency Patterns in Go",
            //     "Working with Go Modules",
            //     "Go Testing and Benchmarking",
            //     "Go Microservices",
            //     "Advanced Go Topics",
            // ],
            // "Swift" => [
            //     "Swift Fundamental",
            //     "iOS App Development with Swift",
            //     "macOS App Development with Swift",
            //     "SwiftUI Framework",
            //     "Swift Performance Optimization",
            //     "Swift Design Patterns",
            //     "Cross-Platform Development with Swift",
            //     "Swift Package Development",
            // ],
            // "Rust" => [
            //     "Rust Fundamental",
            //     "Web Development with Rust",
            //     "Systems Programming with Rust",
            //     "Concurrency and Parallelism in Rust",
            //     "Building Command-Line Tools with Rust",
            //     "Game Development with Rust",
            //     "Rust GUI Development",
            //     "Rust Testing and Benchmarking",
            // ],
            // "Kotlin" => [
            //     "Kotlin Fundamental",
            //     "Android App Development with Kotlin",
            //     "Kotlin Coroutines",
            //     "Kotlin Multiplatform Development",
            //     "Kotlin DSL Development",
            //     "Kotlin Spring Framework",
            //     "Kotlin Testing and Debugging",
            //     "Kotlin Performance Optimization",
            // ],
            // "Scala" => [
            //     "Scala Fundamental",
            //     "Functional Programming with Scala",
            //     "Scala Web Development",
            //     "Concurrency and Parallelism in Scala",
            //     "Building Microservices with Scala",
            //     "Scala Akka Framework",
            //     "Scala Play Framework",
            //     "Scala Reactive Programming",
            // ],
            // "Dart" => [
            //     "Dart Fundamental",
            //     "Flutter App Development with Dart",
            //     "Web Development with Dart",
            //     "Dart Packages and Dependencies",
            //     "State Management in Flutter",
            //     "Unit Testing in Dart",
            //     "Dart Performance Optimization",
            //     "Cross-Platform Development with Dart",
            // ],
            // "TypeScript" => [
            //     "TypeScript Fundamental",
            //     "Building Web Applications with TypeScript",
            //     "Node.js Development with TypeScript",
            //     "React Development with TypeScript",
            //     "Angular Development with TypeScript",
            //     "Vue.js Development with TypeScript",
            //     "TypeScript Design Patterns",
            //     "TypeScript Testing and Debugging",
            // ],
            // "Shell Scripting" => [
            //     "Shell Scripting Basics",
            //     "Bash Scripting",
            //     "Shell Scripting for Automation",
            //     "Linux System Administration",
            //     "Shell Scripting for DevOps",
            //     "Advanced Shell Scripting Techniques",
            //     "Shell Scripting Best Practices",
            //     "Debugging Shell Scripts",
            // ],
            // "Assembly Language" => [
            //     "Assembly Language Basics",
            //     "x86 Assembly Language",
            //     "ARM Assembly Language",
            //     "Assembly Language for Embedded Systems",
            //     "Assembly Language Optimization",
            //     "Writing Device Drivers in Assembly",
            //     "Low-Level System Programming",
            //     "Assembly Language Debugging",
            // ],

            //article
            'Tips & Tutorial' => [],
            'Programmming' => [],
            'Teknologi' => []
        ];



        $colors = array(
            'FF5733',   // Red
            'FFC300',   // Yellow
            'DAF7A6',   // Light green
            'FFC2D2',   // Light pink
            'C70039',   // Dark red
            '900C3F',   // Dark pink
            '581845',   // Dark purple
            '900D0D',   // Dark red
            'FF7F50',   // Coral
            '4CAF50'    // Green
        );


        // $faker = Faker\Factory::create();

        foreach ($topic as $top => $value) {
            // Now you can use $title, $videoId, $duration, and $thumbnail in your code as needed
            $color = $colors[rand(1, 9)];
            $crtop = Topic::create([
                'name' => $top,
                'type' => count($value) > 0 ? "serie" : "article",
                'slug' => Str::slug($top),
                'description' => "Belajar $top menjadi lebih asik , terstruktur dan mudah di pahami",
                'image' => "https://via.placeholder.com/100x100/$color/ffffff?text=$top"
            ]);
            if (count($value) === 0) continue;
            foreach ($value as $serie) {
                $c = $colors[rand(1, 9)];
                $playlist = $this->searchPlaylistAndFetchVideos($serie);



                $ser = Serie::create([
                    'slug' => Str::slug($playlist['playlist_title']),
                    'title' => $playlist['playlist_title'],
                    'teaser' => $playlist['playlist_description'],
                    'description' => $playlist['playlist_description'],
                    'image' => $playlist['playlist_thumbnail'], //"https://via.placeholder.com/1280x720/$c/000000?text=$serie",
                    'status' => 'published'
                ]);
                $ser->topics()->sync($crtop);

                foreach ($playlist['videos'] as $key => $video) {
                    Video::create([
                        'serie_id' => $ser->id,
                        'title' => $video['title'],
                        'unique_video_id' => $video['video_id'], // 'JmPgWUd896g',
                        'order_num' => $key + 1,
                        'seconds_time' => rand(500, 2000),
                        'description' => $video['description'],
                        'is_free' => rand(0, 1),
                    ]);
                }
            }
        }

        $this->createDummyArticles();



        // Serie::all()->map(function ($s) {
        //     for ($i = 1; $i < 10; $i++) {
        //         $s->videos()->create([
        //             'title' => "Belajar kursus ini sesi $i",
        //             'unique_video_id' => 'JmPgWUd896g',
        //             'order_num' => $i,
        //             'seconds_time' => rand(500, 2000),
        //             'description' => "Ini hanya video dummy.",
        //             'is_free' => rand(0, 1),

        //         ]);
        //     }
        // });



        Cache::clear();
    }




    private function searchPlaylistAndFetchVideos($searchQuery)
    {
        // Make a request to search for playlists using the YouTube Data API
        // Make a request to search for playlists using the YouTube Data API
        $response = Http::get('https://www.googleapis.com/youtube/v3/search', [
            'key' => 'AIzaSyDbBjcZHg0nVhSzBy9hYcjfWuIoBsw5a9I',
            'part' => 'snippet',
            'q' => $searchQuery,
            'type' => 'playlist',
            'maxResults' => 1, // Limit to 1 result for simplicity
        ]);


        // Check if the request was successful
        if ($response->failed()) {
            return null;
        }

        // Parse the JSON response
        $data = $response->json();


        // Check if any playlists were found
        if (empty($data['items'])) {
            return null;
        }


        // Get the ID of the first playlist
        $playlistId = $data['items'][0]['id']['playlistId'];

        // Make a request to fetch the videos from the playlist using the YouTube Data API
        $videosResponse = Http::get('https://www.googleapis.com/youtube/v3/playlistItems', [
            'key' => 'AIzaSyDbBjcZHg0nVhSzBy9hYcjfWuIoBsw5a9I',
            'part' => 'snippet,contentDetails', // Include contentDetails to get video duration
            'playlistId' => $playlistId,
            'maxResults' => 50, // Maximum number of videos to fetch
        ]);

        // Check if the request was successful
        if ($videosResponse->failed()) {
            return null;
        }

        // Parse the JSON response
        $videosData = $videosResponse->json();

        // Get the videos in the playlist
        $videos = [];
        foreach ($videosData['items'] as $videoItem) {
            $videoSnippet = $videoItem['snippet'];

            $videoId = $videoSnippet['resourceId']['videoId'];
            $videoTitle = $videoSnippet['title'];
            $description = $videoSnippet['description'];




            $videos[] = [
                'video_id' => $videoId,
                'title' => $videoTitle,
                'description' => $description,

            ];
        }

        // Create an array with playlist and video details
        //    dd($data['items'][0]['snippet']);
        var_dump($data['items'][0]['snippet']);
        $playlistInfo = [
            'playlist_id' => $playlistId,
            'playlist_title' => $data['items'][0]['snippet']['title'],
            'playlist_thumbnail' => $data['items'][0]['snippet']['thumbnails']['high']['url'],
            'playlist_description' => $data['items'][0]['snippet']['description'],
            'videos' => $videos,
        ];

        return $playlistInfo;
    }


    public function createDummyArticles()
    {
        $topicIds = Topic::whereType('article')->pluck('id')->toArray();

        $response = Http::get('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=b6f7724e8ff142d0beecbc055e71f85a');

        if ($response->successful()) {
            $data = $response->json();

            $articles = $data['articles'];
            foreach ($articles as $key => $articleData) {
                $article = Article::updateOrCreate(
                    ['title' => $articleData['title']],
                    [
                        'user_id' => 1, // Assuming a default user ID
                        'slug' => Str::slug($articleData['title']),
                        'title' => $articleData['title'],
                        'synopsis' => substr($articleData['content'], 20),
                        'body' => $articleData['content'],
                        'image' => "https://via.placeholder.com/1280x720?text=" . urlencode($articleData['title']),
                        'published' => 1,
                    ]
                );
                $randomTopicId = $topicIds[array_rand($topicIds)];

                // Attach the article to the randomly selected topic
                $article->topics()->syncWithoutDetaching([$randomTopicId]);
            }
        } else {
            return response()->json(['error' => 'Failed to retrieve data'], $response->status());
        }
    }
}
