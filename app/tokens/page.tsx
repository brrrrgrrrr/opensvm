'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface Token {
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  volume24h: number;
  marketCap: number;
}

const EXAMPLE_TOKENS: Token[] = [
  {
    name: 'Solana',
    symbol: 'SOL',
    price: 198.35,
    change24h: 3.15,
    volume24h: 1234567890,
    marketCap: 85000000000
  },
  {
    name: 'Bonk',
    symbol: 'BONK',
    price: 0.000016,
    change24h: -2.5,
    volume24h: 45678901,
    marketCap: 950000000
  },
  {
    name: 'Raydium',
    symbol: 'RAY',
    price: 1.23,
    change24h: 5.7,
    volume24h: 7890123,
    marketCap: 250000000
  },
  // Add more example tokens as needed
];

export default function TokensPage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Search Section */}
        <div className="max-w-3xl mx-auto mb-12">
          <Input
            type="text"
            placeholder="Search tokens by name or address..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 h-12 px-4 rounded-lg"
          />
        </div>

        {/* Tokens Table */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Name</th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-500">Price</th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-500">24h Change</th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-500">24h Volume</th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-500">Market Cap</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {EXAMPLE_TOKENS.map((token) => (
                  <tr key={token.symbol} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div>
                          <div className="font-medium text-gray-900">{token.name}</div>
                          <div className="text-sm text-gray-500">{token.symbol}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right text-sm text-gray-900">
                      ${token.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 6 })}
                    </td>
                    <td className={`px-6 py-4 text-right text-sm ${token.change24h >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {token.change24h >= 0 ? '+' : ''}{token.change24h}%
                    </td>
                    <td className="px-6 py-4 text-right text-sm text-gray-900">
                      ${token.volume24h.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-right text-sm text-gray-900">
                      ${token.marketCap.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
} 