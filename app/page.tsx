// Arquivo: app/page.js (VERSÃO FINAL E CORRETA)

import Sunrise from "../components/Sunrise"

export default function HomePage() {
  return (
    // 1. O CONTAINER PRINCIPAL:
    //    - 'position: relative' é essencial para que os elementos 'absolute' dentro dele
    //      (como nosso Sunrise) se posicionem em relação a este container.
    //    - Ele ocupa a tela inteira.
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      {/* 2. CAMADA DE BAIXO (z-index: 0): Nosso fundo animado. */}
      <Sunrise />

      {/* 3. CAMADA DE CIMA (z-index: 10): O conteúdo da página. */}
      {/*    - 'position: relative' e um 'z-index' maior garantem que este container
             fique na frente do fundo. */}
      <div style={{ position: "relative", zIndex: 10, height: "100%" }}>
        {/* Agora, coloque os elementos da sua UI aqui dentro */}
        <header
          style={{
            padding: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <button
            style={{
              backgroundColor: "#2ecc71",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Create account
          </button>
        </header>

        <footer
          style={{
            position: "absolute",
            bottom: "1.5rem",
            left: "1.5rem",
          }}
        >
          <div
            style={{
              backgroundColor: "black",
              color: "white",
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
              fontFamily: "sans-serif",
            }}
          >
            N
          </div>
        </footer>
      </div>
    </div>
  )
}
