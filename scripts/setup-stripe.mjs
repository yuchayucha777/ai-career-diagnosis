import Stripe from 'stripe';
import fs from 'fs';
import path from 'path';

const key = process.env.STRIPE_SECRET_KEY;
if (!key) {
  console.error('STRIPE_SECRET_KEY が設定されていません');
  process.exit(1);
}

const stripe = new Stripe(key);

const product = await stripe.products.create({
  name: 'IT職種診断 プレミアム',
  description: '詳細診断レポート・全職種市場価値データへのアクセス',
});

const price = await stripe.prices.create({
  product: product.id,
  unit_amount: 980,
  currency: 'jpy',
});

console.log(`✅ 商品作成完了`);
console.log(`   商品ID : ${product.id}`);
console.log(`   価格ID : ${price.id}`);
console.log('');
console.log('.env.local に追加:');
console.log(`STRIPE_PRICE_ID=${price.id}`);

// .env.local が存在すれば自動で書き込む
const envPath = path.join(process.cwd(), '.env.local');
if (fs.existsSync(envPath)) {
  let content = fs.readFileSync(envPath, 'utf-8');
  if (content.includes('STRIPE_PRICE_ID=')) {
    content = content.replace(/STRIPE_PRICE_ID=.*/, `STRIPE_PRICE_ID=${price.id}`);
  } else {
    content += `\nSTRIPE_PRICE_ID=${price.id}`;
  }
  fs.writeFileSync(envPath, content);
  console.log('');
  console.log('✅ .env.local に自動書き込みしました');
}
