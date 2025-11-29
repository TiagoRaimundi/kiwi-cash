import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Segments() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const segments = [
    { icon: '🍕', title: 'Restaurantes', desc: 'Pizzarias, lanchonetes, delivery' },
    { icon: '💇', title: 'Salões & Barbearias', desc: 'Serviços de beleza e estética' },
    { icon: '🏋️', title: 'Academias', desc: 'Studios, crossfit, pilates' },
    { icon: '🛒', title: 'Varejo', desc: 'Lojas de roupa, calçados, acessórios' },
    { icon: '🔧', title: 'Serviços', desc: 'Oficinas, assistências técnicas' },
    { icon: '📱', title: 'Telecoms', desc: 'Operadoras e provedores de internet' },
    { icon: '☕', title: 'Cafeterias', desc: 'Cafés, padarias, confeitarias' },
    { icon: '🏨', title: 'Hospedagem', desc: 'Hotéis, pousadas, hostels' },
    { icon: '🎓', title: 'Educação', desc: 'Cursos, escolas, treinamentos' },
    { icon: '🏥', title: 'Saúde', desc: 'Clínicas, consultórios, farmácias' },
    { icon: '🚗', title: 'Automotivo', desc: 'Postos, lavagens, estacionamentos' },
    { icon: '🎮', title: 'Entretenimento', desc: 'Cinemas, parques, eventos' }
  ];

  const totalPages = Math.ceil(segments.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentSegments = segments.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section
      id="segmentos"
      style={{
        padding: "5rem 1rem",
        background: "#f9fafb",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Pattern - Textura de Grid MAIS VISÍVEL */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(16, 185, 129, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16, 185, 129, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Linhas diagonais adicionais para mais textura */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 80px,
              rgba(16, 185, 129, 0.04) 80px,
              rgba(16, 185, 129, 0.04) 81px
            )
          `,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Floating shapes decorativos */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 0,
          filter: "blur(40px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "8%",
          width: "250px",
          height: "250px",
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 0,
          filter: "blur(40px)",
        }}
      />

      {/* Dots pattern accent - MAIS VISÍVEL */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "3%",
          width: "120px",
          height: "120px",
          backgroundImage: "radial-gradient(circle, rgba(16, 185, 129, 0.25) 2px, transparent 2px)",
          backgroundSize: "20px 20px",
          pointerEvents: "none",
          zIndex: 0,
          opacity: 0.6,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "25%",
          right: "8%",
          width: "100px",
          height: "100px",
          backgroundImage: "radial-gradient(circle, rgba(16, 185, 129, 0.25) 2px, transparent 2px)",
          backgroundSize: "20px 20px",
          pointerEvents: "none",
          zIndex: 0,
          opacity: 0.6,
        }}
      />

      {/* Círculos concêntricos decorativos */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "15%",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          border: "2px solid rgba(16, 185, 129, 0.1)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "calc(50% + 15px)",
          right: "calc(15% + 15px)",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          border: "2px solid rgba(16, 185, 129, 0.08)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              display: "inline-block",
              background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
              color: "white",
              padding: "0.65rem 1.5rem",
              borderRadius: "50px",
              fontSize: "0.875rem",
              fontWeight: 700,
              marginBottom: "1.5rem",
              letterSpacing: "1px",
              textTransform: "uppercase",
              boxShadow: "0 4px 12px rgba(16, 185, 129, 0.25)",
            }}
          >
            PARA TODOS
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{
              fontSize: "clamp(2.25rem, 5vw, 3rem)",
              fontWeight: 800,
              marginBottom: "1.25rem",
              color: "#111827",
              lineHeight: 1.2,
            }}
          >
            Para{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Qualquer Tipo
            </span>{" "}
            de Negócio
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{
              fontSize: "clamp(1.05rem, 2vw, 1.15rem)",
              color: "#6b7280",
              maxWidth: "42rem",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Independente do seu segmento, o Kiwi se adapta ao seu negócio. Com
            suporte para mais de 50 tipos de empresas diferentes.
          </motion.p>
        </div>

        {/* Segments Grid */}
        <div style={{ minHeight: "500px", marginBottom: "3rem" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {currentSegments.map((seg, i) => (
                <motion.div
                  key={`${currentPage}-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  style={{
                    position: "relative",
                    background: "white",
                    border: "2px solid #e5e7eb",
                    borderRadius: "20px",
                    padding: "2rem",
                    textAlign: "center",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                    overflow: "hidden",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#10b981";
                    e.currentTarget.style.boxShadow =
                      "0 12px 30px rgba(16, 185, 129, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#e5e7eb";
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.06)";
                  }}
                >
                  {/* Gradient accent */}
                  <div
                    style={{
                      position: "absolute",
                      top: "-50%",
                      right: "-30%",
                      width: "200px",
                      height: "200px",
                      background: "radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)",
                      borderRadius: "50%",
                      pointerEvents: "none",
                      filter: "blur(30px)",
                    }}
                  />

                  {/* Top accent bar */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "3px",
                      background:
                        "linear-gradient(to right, transparent, #10b981, transparent)",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    }}
                    className="accent-bar"
                  />

                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    style={{
                      fontSize: "3.5rem",
                      marginBottom: "1rem",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {seg.icon}
                  </motion.div>

                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      marginBottom: "0.5rem",
                      color: "#111827",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {seg.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "#6b7280",
                      lineHeight: 1.6,
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {seg.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Controls */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {/* Previous Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              style={{
                padding: "0.75rem 1.5rem",
                borderRadius: "50px",
                fontWeight: 700,
                background: "white",
                border: "2px solid #e5e7eb",
                color: "#111827",
                cursor: currentPage === 1 ? "not-allowed" : "pointer",
                opacity: currentPage === 1 ? 0.4 : 1,
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                fontSize: "0.95rem",
              }}
              onMouseEnter={(e) => {
                if (currentPage !== 1) {
                  e.currentTarget.style.borderColor = "#10b981";
                  e.currentTarget.style.boxShadow =
                    "0 6px 16px rgba(16, 185, 129, 0.2)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#e5e7eb";
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
              }}
            >
              <span style={{ fontSize: "1.125rem" }}>←</span>
              <span>Anterior</span>
            </motion.button>

            {/* Page Numbers */}
            <div style={{ display: "flex", gap: "0.5rem" }}>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <motion.button
                    key={page}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => goToPage(page)}
                    style={{
                      width: "3rem",
                      height: "3rem",
                      borderRadius: "50%",
                      fontWeight: 700,
                      background:
                        currentPage === page
                          ? "linear-gradient(135deg, #10b981 0%, #059669 100%)"
                          : "white",
                      color: currentPage === page ? "white" : "#111827",
                      border:
                        currentPage === page
                          ? "none"
                          : "2px solid #e5e7eb",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      boxShadow:
                        currentPage === page
                          ? "0 8px 20px rgba(16, 185, 129, 0.35)"
                          : "0 2px 8px rgba(0,0,0,0.08)",
                      transform: currentPage === page ? "scale(1.1)" : "scale(1)",
                      fontSize: "0.95rem",
                    }}
                    onMouseEnter={(e) => {
                      if (currentPage !== page) {
                        e.currentTarget.style.borderColor = "#10b981";
                        e.currentTarget.style.boxShadow =
                          "0 6px 16px rgba(16, 185, 129, 0.2)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (currentPage !== page) {
                        e.currentTarget.style.borderColor = "#e5e7eb";
                        e.currentTarget.style.boxShadow =
                          "0 2px 8px rgba(0,0,0,0.08)";
                      }
                    }}
                  >
                    {page}
                  </motion.button>
                )
              )}
            </div>

            {/* Next Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              style={{
                padding: "0.75rem 1.5rem",
                borderRadius: "50px",
                fontWeight: 700,
                background: "white",
                border: "2px solid #e5e7eb",
                color: "#111827",
                cursor: currentPage === totalPages ? "not-allowed" : "pointer",
                opacity: currentPage === totalPages ? 0.4 : 1,
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                fontSize: "0.95rem",
              }}
              onMouseEnter={(e) => {
                if (currentPage !== totalPages) {
                  e.currentTarget.style.borderColor = "#10b981";
                  e.currentTarget.style.boxShadow =
                    "0 6px 16px rgba(16, 185, 129, 0.2)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#e5e7eb";
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
              }}
            >
              <span>Próxima</span>
              <span style={{ fontSize: "1.125rem" }}>→</span>
            </motion.button>
          </div>
        </div>

        {/* Page Indicator */}
        <motion.p
          key={currentPage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            textAlign: "center",
            marginTop: "1.5rem",
            fontSize: "0.875rem",
            color: "#6b7280",
            fontWeight: 500,
          }}
        >
          Página {currentPage} de {totalPages} • {segments.length} segmentos no
          total
        </motion.p>
      </div>

      <style jsx>{`
        .accent-bar {
          opacity: 0;
        }
        
        div:hover .accent-bar {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}