<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PackagePricesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $packagePrices = [
            [
                'name' => 'Basic',
                'price' => 100,
                'duration_months' => 1,
                'description' => 'Basic package',
            ],
            [
                'name' => 'Standard',
                'price' => 200,
                'duration_months' => 3,
                'description' => 'Standard package',
            ],
            [
                'name' => 'Premium',
                'price' => 300,
                'duration_months' => 6,
                'description' => 'Premium package',
            ],
        ];

        foreach ($packagePrices as $packagePrice) {
            \App\Models\PackagePrice::create($packagePrice);
        }
    }
}
