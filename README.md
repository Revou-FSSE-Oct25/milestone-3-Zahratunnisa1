[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/2EJ5Xvqu)
>>>>>>> 824202ae22b8ac0f3f295037c8c7d9b67cc2e7d4

# ReVoShop

ReVoShop is a simple e-commerce website built using Next.js App Router.

This website is SPA-like (Single Page Application). It’s feels like single page application but it’s not totally like that. That’s make SPA-like is navigation use next/link, move page without full reload ,UX feels like one page. But it’s not totally SPA because we’ve so much route (/products/products[id]), there’s SSR & SSG , pages render in server. It’contain product list that we take from FakeStore API because to fulfill assignment RevoU in nextJS modul on week 13. So, I hope I can improve this project more if my knowledge grow more over time.

# 🚀🚀Feature of this page website 🚀🚀

# 🏠 Home Page (SSG) 🏠
Main page that displays welcome message to user when first time open 🛍️ RevoShop 🛍️ website. It’s use static Site Generation (SSG), no data fetching. It’s give first impression to user before entering product pages.

# 🧭 Navigation Bar (Global Layout) 🧭
Navbar display in all page and it’s uses as main navigation website. Created as reusable component, placed in layout.tsx and uses next/link for client-side-navigation. 
- ReVoShop Logo direct to Home Page 
    `/` → 🏠 Home
- tab product in right up corner direct to list product page.
    `/products` → 🛍️ Product List

# 🛒🛒 Product Listing Page (Client Side Rendering- CSR) 🛒🛒
Display all product in grid card that contain :
a.	🖼️📸Product picture 🖼️📸
b.	🏷️ Product name 🏷️
c.	💰Product price 💰
It’s use Client Side Rendering (CSR) (“useState”, “useEffect”) , the date take from FakeStoreAPI , product display with dynamic 

# 🧩🧩Product Detail Page (Server Side Rendering -SSR)🧩🧩
It’s display complete details from product that choose by user. The details product information like product name, product picture , product description, price product, etc. It’s uses dynamic routing (/products/[id]) , its uses server side rendering (SSR), fetch data in server every request, uses parameter URL (params.id). params.id uses to take specific product data that choose by user. When user click one of product in list page, URL will change to be like /products/3, The number 3 here is ID product and then Next.js automatically read URL part and save it as parameter(params.id). Here’s a little picture about params work cycle : 

a.	page.tsx (app/products/[id]/page.tsx) get params.id then fetch to the /api/products/ex.(5)  useEffect(() => {fetch(`https://fakestoreapi.com/products/${id}`)
b.	route.ts get params.id (app/api/products/[id]/route.tsx) get params.id 
c.	📡📡 API fetch to the FakeStoreAPI 📡📡
d.	Route.tsx return JSON response
e.	The data will sent to page.tsx 
f.	UI finally displayed 

# 🔀🔀 Dynamic Routing & Client-side Navigation 🧭🧭
Navigation between pages do without page reload. It uses file-based routing Next.js , uses next/link (app/products/[id]/page.tsx) , [id] Folder itself show as dynamic routing. In page.tsx especially on (const product = await getProduct(params.id) , params.id automatically filled by Next.js , the value comes from URL

# 🎨🎨 Responsive Layout & Basic Styling 🎨🎨
This website want to provide a responsive layout  to users according to the device that used (laptop, tablet or handphone) , make it’s feels look comfortable in any device. Product card display using layout grid. 

## ▶️ How to Run

1️⃣ 🖥️ Install dependencies 🖥️  
2️⃣ 🏗️Run development server  🏗️
3️⃣ 🌍 Open in browser 🌍

# by 🙋‍♀️ : Zahratunnisa (ReVou Assigment 2026)