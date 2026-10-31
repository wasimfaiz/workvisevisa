async function test() {
  const res = await fetch('http://localhost:3000/b2b-partner');
  const html = await res.text();
  console.log('Contains /partner/login?', html.includes('/partner/login'));
  console.log('Contains /admin?', html.includes('/admin'));

  const pLogin = await fetch('http://localhost:3000/partner/login', { redirect: 'manual' });
  console.log('/partner/login status:', pLogin.status, 'location:', pLogin.headers.get('location'));

  const pRoot = await fetch('http://localhost:3000/partner', { redirect: 'manual' });
  console.log('/partner status:', pRoot.status, 'location:', pRoot.headers.get('location'));

  const pDash = await fetch('http://localhost:3000/partner/dashboard', { redirect: 'manual' });
  console.log('/partner/dashboard status:', pDash.status, 'location:', pDash.headers.get('location'));
}

test().catch(console.error);
