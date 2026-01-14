function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Bizning restoranimizga 🍽 Xush Kelibsiz!</h1>
          <p className="hero-subtitle">
            Yangi taom • Tez yetkazish • Ajoyib narxlar
          </p>
          <a href="/menu" className="cta-btn">Buyurtma qilish</a>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2 className="features-title">Nega bizni tanlashadi?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>🍔 Taom sifato</h3>
            <p>
Har bir taom uchun faqat yangi va yuqori sifatli ingredientlar.</p>
          </div>
          <div className="feature-card">
            <h3>⏱ Tez yetkazish</h3>
            <p>Sevimli taomlaringiz bir necha daqiqada eshigingizga yetkaziladi.</p>
          </div>
          <div className="feature-card">
            <h3>💰 Ajoyib narxlar</h3>
            <p>Hamyoningizni buzmaydigan mazali taom.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="about-grid">
          <div className="about-text">
            <h2 style={{textAlign: "center"}}>Biz haqimizda</h2>
            <p style={{textAlign: "center"}}>
             Bizning restoranimiz 1 yildan ortiq vaqt mobaynida jamiyatga eng sifatli taomlar bilan xizmat qilib kelmoqda.
              Biz yangi ingredientlar, gigiena va mijozlar ehtiyojini qondirishga e'tibor qaratamiz. Bizning oshpazlarimiz mahalliy va xalqaro oshxonalar bo'yicha mutaxassislardir.
            </p>
            <p style={{textAlign:"center"}}>
              Biz gamburger va pitssadan tortib an'anaviy taomlarga qadar har bir taomni mehr va g'amxo'rlik bilan tayyorlaymiz.
              Ajoyib ovqatlanish tajribasi uchun bizga qo'shiling yoki tez yetkazib berish uchun onlayn buyurtma bering.
            </p>
          </div>
          <div className="about-img">
            <img src="https://img.freepik.com/premium-photo/delicious-food-platter_1199678-476.jpg?semt=ais_hybrid&w=740&q=80" alt="About us"/>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2 style={{textAlign: "center"}}>Mijozlarimiz nima deydi?</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>"Ajoyib taom! Tez yetkazib berish va juda mazali. Tavsiya etaman!"</p>
            <span>- Jasur N.</span>
          </div>
          <div className="testimonial-card">
            <p>"Shahardagi eng yaxshi restoran. Ajoyib xilma-xillik va samimiy xodimlar."</p>
            <span>- Laylo M.</span>
          </div>
          <div className="testimonial-card">
            <p>"Mazali taomlar hamyonbop narxlarda. Yana buyurtma beramiz!"</p>
            <span>- Shohjahon A.</span>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
