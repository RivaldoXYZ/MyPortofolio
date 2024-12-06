const pdfUrl = '/assets/cv/Rivaldo Butarbutar-resume.pdf'; // Mendeklarasikan variabel pdfUrl

// Fungsi untuk menampilkan PDF
function renderPDF(url) {
    pdfjsLib.getDocument(url).promise.then(function (pdfDoc_) {
        const pdfDoc = pdfDoc_;
        const pageNumber = 1; // Menampilkan halaman pertama

        pdfDoc.getPage(pageNumber).then(function (page) {
            const scale = 1.5;
            const viewport = page.getViewport({ scale: scale });

            // Ambil canvas DOM untuk menampilkan PDF
            const canvas = document.getElementById('pdfCanvas');
            const context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            // Render PDF ke canvas
            page.render({
                canvasContext: context,
                viewport: viewport
            });
        });
    });
}

// Panggil fungsi renderPDF saat halaman dimuat
window.onload = function () {
    renderPDF(pdfUrl);  // Menjamin pdfUrl sudah didefinisikan sebelum dipanggil
};
