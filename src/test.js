const testUpdateBalance = async () => {
  const userId = 1; // Предполагаем, что используется ID пользователя 1
  const amount = -2; // Уменьшаем баланс на 2
  let successfulRequests = 0;
  let failedRequests = 0;
  const requests = [];

  for (let i = 0; i < 10000; i++) {
    requests.push(fetch('http://localhost:3000/user/update-balance', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userId, amount })
    }).then(response => {
      if (!response.ok) {
        throw new Error(`Request ${i + 1} failed: ${response.statusText}`);
      }
      successfulRequests++;
      return response.json().then(data => console.log(`Request ${i + 1}: Success`, data));
    }).catch(error => {
      failedRequests++;
      console.error(error.message);
    }));
  }

  await Promise.all(requests);
  console.log(`Total Successful Requests: ${successfulRequests}`);
  console.log(`Total Failed Requests: ${failedRequests}`);
};

testUpdateBalance();
