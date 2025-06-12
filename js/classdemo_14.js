const p = document.querySelector('.show-classdemo');
console.log('p', p);

function showClassDemo(item) {
  switch (item) {
    case 'w01_dom_14':
      p.innerHTML = `<iframe src='./demo/w01_dom_14/index.html' width='100%' height='100%' />`;
      break;
    case 'w02_dom_14':
      p.innerHTML = `<iframe src='./demo/w02_dom_14/index.html' width='100%' height='100%' />`;
      break;
    case 'w03_tictactoe_14':
      p.innerHTML = `<iframe src='./demo/w03_tictactoe_14/tictactoe_14.html' width="100%" height="100%" />`;
      break;
    case 'w03_p1_14':
      p.innerHTML = `<iframe src='./demo/w03_basics_14/p1_14/p1_14.html' width="100%" height="100%" />`;
      break;
    case 'w04_p2_14':
      p.innerHTML = `<iframe src='./demo/w04_basics_14/p2_14/p2_14.html' width="100%" height="100%" />`;
      break;
    case 'w05_p1_14':
      p.innerHTML = `<iframe src='./demo/w05_basics_14/p1_14/p1_14.html' width="100%" height="100%" />`;
      break;
    case 'w05_p2_14':
      p.innerHTML = `<iframe src='./demo/w05_basics_14/p2_14/p2_14.html' width="100%" height="100%" />`;
      break;
    case 'w06_p5_14':
      p.innerHTML = `<iframe src='./demo/w06_prep_test_14/p5_14/src/p5_14.html' width="100%" height="100%" />`;
      break;
    case 'w06_p6_14':
      p.innerHTML = `<iframe src='./demo/w06_prep_test_14/p6_14/src/p6_14.html' width="100%" height="100%" />`;
      break;
    case 'quiz1_14_p1':
      p.innerHTML = `<iframe src='./exams/quiz1_14/p1_14/src/p1_14.html' width="100%" height="100%" />`;
      break;
    case 'quiz1_14_p2':
      p.innerHTML = `<iframe src='./exams/quiz1_14/p2_14/src/p2_14.html' width="100%" height="100%" />`;
      break;
    case 'quiz1_14_p3':
      p.innerHTML = `<iframe src='./exams/quiz1_14/p3_14/p3_14.html' width="100%" height="100%" />`;
      break;
    case 'quiz1_14_p4':
      p.innerHTML = `<iframe src='./exams/quiz1_14/p4_14/p4_14.html' width="100%" height="100%" />`;
      break;
  }
}

function showMid(item) {
  switch (item) {
    case 'm1_14':
      p.innerHTML = `<iframe src='./exams/mid1_14/m1_14/src/p1_14.html' width='100%' height='100%' />`;
      break;
    case 'm2_14':
      p.innerHTML = `<iframe src='./exams/mid1_14/m2_14/p2_14.html' width='100%' height='100%' />`;
      break;
    case 'm3_14':
      p.innerHTML = `<iframe src='./exams/mid1_14/m3_14/p3_14.html' width='100%' height='100%' />`;
      break;
  }
}

function showFinal(item) {
  switch (item) {
    case 'final_client_menu':
      p.innerHTML = `<iframe src='./exams/final_14/final_client_14/menu/final_14.html' width="100%" height="100%" />`;
      break;
    case 'final_client_shop':
      p.innerHTML = `<iframe src='./exams/final_14/final_client_14/shop/womens.html' width="100%" height="100%" />`;
      break;
    case 'final_client_product':
      p.innerHTML = `<iframe src='./exams/final_14/final_client_14/product/product_localjson_14.html' width="100%" height="100%" />`;
      break;
    case 'final_client_menu_new':
      window.open(
        './exams/final_14/final_client_14/menu/final_14.html',
        '_blank'
      );
      break;
    case 'final_server_menu':
      // 這個需要 server 運行，顯示說明頁面
      p.innerHTML = `
        <div style="padding: 2rem; text-align: center;">
          <h2>Final Server Menu Demo</h2>
          <p>請啟動 final_server_14 來查看:</p>
          <ul style="list-style: none; padding: 0;">
            <li><a href="http://localhost:5000/menu_14/static" target="_blank">Static Menu Page</a></li>
            <li><a href="http://localhost:5000/menu_14" target="_blank">Database Menu Page</a></li>
            <li><a href="http://localhost:5000/api/menu_14" target="_blank">Menu API</a></li>
          </ul>
          <div style="margin-top: 1rem; padding: 1rem; background-color: #f0f0f0; border-radius: 5px;">
            <p><strong>注意:</strong> Server 端需要運行在 Port 5000</p>
            <p>請在 final_server_14 目錄下執行: <code>npm start</code></p>
          </div>
        </div>
      `;
      break;
    case 'final_server_shop':
      p.innerHTML = `
        <div style="padding: 2rem; text-align: center;">
          <h2>Final Server Shop Demo</h2>
          <p>請啟動 final_server_14 來查看:</p>
          <ul style="list-style: none; padding: 0;">
            <li><a href="http://localhost:5000/shop_14/static" target="_blank">Static Shop Page</a></li>
            <li><a href="http://localhost:5000/shop_14" target="_blank">Database Shop Page</a></li>
            <li><a href="http://localhost:5000/api/shop_14" target="_blank">Shop API</a></li>
          </ul>
          <div style="margin-top: 1rem; padding: 1rem; background-color: #f0f0f0; border-radius: 5px;">
            <p><strong>注意:</strong> Server 端需要運行在 Port 5000</p>
            <p>請在 final_server_14 目錄下執行: <code>npm start</code></p>
          </div>
        </div>
      `;
      break;
    case 'final_md1':
      p.innerHTML = `
        <div style="padding: 2rem;">
          <h2>Final MD1 Documentation</h2>
          <p>由於瀏覽器安全限制，無法直接顯示 Markdown 文件。</p>
          <p>請直接開啟文件查看: <code>exams/final_14/final_md1/md1_14.md</code></p>
          <div style="margin-top: 1rem;">
            <a href="./exams/final_14/final_md1/md1_14.md" target="_blank" 
               style="padding: 10px 20px; background-color: #007bff; color: white; text-decoration: none; border-radius: 5px;">
               開啟 MD1 文件
            </a>
          </div>
        </div>
      `;
      break;
    case 'final_md2':
      p.innerHTML = `
        <div style="padding: 2rem;">
          <h2>Final MD2 Documentation</h2>
          <p>由於瀏覽器安全限制，無法直接顯示 Markdown 文件。</p>
          <p>請直接開啟文件查看: <code>exams/final_14/final_md2/md2_14.md</code></p>
          <div style="margin-top: 1rem;">
            <a href="./exams/final_14/final_md2/md2_14.md" target="_blank" 
               style="padding: 10px 20px; background-color: #007bff; color: white; text-decoration: none; border-radius: 5px;">
               開啟 MD2 文件
            </a>
          </div>
        </div>
      `;
      break;
    default:
      // 預設顯示 final 概覽
      p.innerHTML = `
        <div style="padding: 2rem;">
          <h2>Final Exam 14 Demo</h2>
          <h4>林亮廷, 913410014</h4>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem; margin-top: 2rem;">
            <div style="border: 1px solid #ccc; padding: 1rem; border-radius: 8px;">
              <h3>Client Side</h3>
              <ul style="list-style: none; padding: 0;">
                <li style="margin: 0.5rem 0;">
                  <button onclick="showFinal('final_client_menu')" style="padding: 8px 16px; background-color: #28a745; color: white; border: none; border-radius: 4px; cursor: pointer; margin-right: 5px;">Menu (iframe)</button>
                  <button onclick="showFinal('final_client_menu_new')" style="padding: 8px 16px; background-color: #17a2b8; color: white; border: none; border-radius: 4px; cursor: pointer;">Menu (新視窗)</button>
                </li>
                <li style="margin: 0.5rem 0;"><button onclick="showFinal('final_client_shop')" style="padding: 8px 16px; background-color: #28a745; color: white; border: none; border-radius: 4px; cursor: pointer;">Shop Theme</button></li>
                <li style="margin: 0.5rem 0;"><button onclick="showFinal('final_client_product')" style="padding: 8px 16px; background-color: #28a745; color: white; border: none; border-radius: 4px; cursor: pointer;">Product Theme</button></li>
              </ul>
            </div>
            <div style="border: 1px solid #ccc; padding: 1rem; border-radius: 8px;">
              <h3>Server Side</h3>
              <ul style="list-style: none; padding: 0;">
                <li style="margin: 0.5rem 0;"><button onclick="showFinal('final_server_menu')" style="padding: 8px 16px; background-color: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">Menu Server</button></li>
                <li style="margin: 0.5rem 0;"><button onclick="showFinal('final_server_shop')" style="padding: 8px 16px; background-color: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">Shop Server</button></li>
              </ul>
            </div>
            <div style="border: 1px solid #ccc; padding: 1rem; border-radius: 8px;">
              <h3>Documentation</h3>
              <ul style="list-style: none; padding: 0;">
                <li style="margin: 0.5rem 0;"><button onclick="showFinal('final_md1')" style="padding: 8px 16px; background-color: #6c757d; color: white; border: none; border-radius: 4px; cursor: pointer;">Final MD1</button></li>
                <li style="margin: 0.5rem 0;"><button onclick="showFinal('final_md2')" style="padding: 8px 16px; background-color: #6c757d; color: white; border: none; border-radius: 4px; cursor: pointer;">Final MD2</button></li>
              </ul>
            </div>
          </div>
        </div>
      `;
      break;
  }
}
