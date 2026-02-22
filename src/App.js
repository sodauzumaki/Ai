// サービスワーカー登録（対応ブラウザのみ）
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
      .then(reg => {
            document.getElementById('status').textContent = 'Service Worker 登録済み';
                  console.log('SW registered', reg);
                      })
                          .catch(err => {
                                document.getElementById('status').textContent = 'Service Worker 登録失敗';
                                      console.error('SW register failed', err);
                                          });
                                          } else {
                                            document.getElementById('status').textContent = 'Service Worker 非対応';
                                            }

                                            // ボタンで簡易 fetch（CORS に注意）
                                            document.getElementById('ping').addEventListener('click', async () => {
                                              const out = document.getElementById('result');
                                                out.textContent = '通信中…';
                                                  try {
                                                      // 簡易なローカル確認用。外部APIを使う場合はCORS許可が必要。
                                                          const res = await fetch('https://httpbin.org/get');
                                                              const data = await res.json();
                                                                  out.textContent = '成功: ' + (data.url || JSON.stringify(data));
                                                                    } catch (e) {
                                                                        out.textContent = 'エラー: ' + e.message;
                                                                          }
                                                                          });