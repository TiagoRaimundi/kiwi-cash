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
        background: "linear-gradient(to bottom, #f9fafb, #ffffff)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
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
              background: "#10b981",
              color: "white",
              padding: "0.5rem 1rem",
              borderRadius: "50px",
              fontSize: "0.875rem",
              fontWeight: 700,
              marginBottom: "1rem",
              letterSpacing: "1px",
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
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800,
              marginBottom: "1rem",
              color: "#111827",
              lineHeight: 1.2,
            }}
          >
            Para Qualquer Tipo de Negócio
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{
              fontSize: "clamp(1rem, 2vw, 1.125rem)",
              color: "#6b7280",
              maxWidth: "42rem",
              margin: "0 auto",
              lineHeight: 1.6,
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
                    borderRadius: "1rem",
                    padding: "2rem",
                    textAlign: "center",
                    transition: "all 0.3s ease",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                    overflow: "hidden",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#10b981";
                    e.currentTarget.style.boxShadow =
                      "0 10px 25px rgba(16, 185, 129, 0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#e5e7eb";
                    e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.1)";
                  }}
                >
                  {/* Gradient accent */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      width: "8rem",
                      height: "8rem",
                      background: "rgba(16, 185, 129, 0.05)",
                      borderRadius: "50%",
                      filter: "blur(40px)",
                      pointerEvents: "none",
                    }}
                  />

                  {/* Top accent bar */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "2px",
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
                      fontSize: "0.875rem",
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
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                fontSize: "0.95rem",
              }}
              onMouseEnter={(e) => {
                if (currentPage !== 1) {
                  e.currentTarget.style.borderColor = "#10b981";
                  e.currentTarget.style.boxShadow =
                    "0 4px 12px rgba(0,0,0,0.15)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#e5e7eb";
                e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.1)";
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
                        currentPage === page ? "#10b981" : "white",
                      color: currentPage === page ? "white" : "#111827",
                      border:
                        currentPage === page
                          ? "none"
                          : "2px solid #e5e7eb",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      boxShadow:
                        currentPage === page
                          ? "0 8px 16px rgba(16, 185, 129, 0.3)"
                          : "0 1px 3px rgba(0,0,0,0.1)",
                      transform: currentPage === page ? "scale(1.1)" : "scale(1)",
                      fontSize: "0.95rem",
                    }}
                    onMouseEnter={(e) => {
                      if (currentPage !== page) {
                        e.currentTarget.style.borderColor = "#10b981";
                        e.currentTarget.style.boxShadow =
                          "0 4px 12px rgba(0,0,0,0.15)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (currentPage !== page) {
                        e.currentTarget.style.borderColor = "#e5e7eb";
                        e.currentTarget.style.boxShadow =
                          "0 1px 3px rgba(0,0,0,0.1)";
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
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                fontSize: "0.95rem",
              }}
              onMouseEnter={(e) => {
                if (currentPage !== totalPages) {
                  e.currentTarget.style.borderColor = "#10b981";
                  e.currentTarget.style.boxShadow =
                    "0 4px 12px rgba(0,0,0,0.15)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#e5e7eb";
                e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.1)";
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