const chatBubble = document.getElementById("chatBubble");
const chatWindow = document.getElementById("chatWindow");
const closeChat = document.getElementById("closeChat");
const chatInput = document.getElementById("chatInput");
const sendChat = document.getElementById("sendChat");
const chatMessages = document.getElementById("chatMessages");

if (chatBubble) {
    chatBubble.addEventListener("click", () => {
        chatWindow.classList.toggle("open");
    });

    closeChat.addEventListener("click", () => {
        chatWindow.classList.remove("open");
    });

    function addMessage(text, sender) {
        const msg = document.createElement("div");
        msg.classList.add("chat-msg", sender);
        msg.textContent = text;
        chatMessages.appendChild(msg);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function getBotReply(text) {
        const t = text.toLowerCase();

        if (t.includes("java") && !t.includes("javascript")) {
            return "Java cocok buat Android, backend enterprise, dan sistem besar. Cek halaman Java untuk detail lengkap ya!";
        }
        if (t.includes("javascript") || t.includes("js")) {
            return "JavaScript dipakai buat bikin website interaktif dan aplikasi web. Cek halaman JavaScript untuk detail lengkap!";
        }
        if (t.includes("c++") || t.includes("cpp")) {
            return "C++ jago di performa tinggi, cocok buat game engine dan software desktop berat. Cek halaman C++ untuk detail!";
        }
        if (t.includes("python")) {
            return "Python paling ramah pemula, banyak dipakai di AI, data science, dan automation. Cek halaman Python untuk detail!";
        }
        if (t.includes("mulai") || t.includes("belajar") || t.includes("pemula")) {
            return "Bingung mulai dari mana? Coba cek halaman Problem Solver, banyak tips buat pemula di sana!";
        }
        if (t.includes("error") || t.includes("bug") || t.includes("stuck")) {
            return "Sering nemu error itu wajar kok! Cek halaman Problem Solver, ada solusi untuk masalah umum pemula.";
        }
        if (t.includes("proyek") || t.includes("ide") || t.includes("project")) {
            return "Cek halaman Inspiration, ada ide proyek dan contoh kode buat tiap bahasa pemrograman!";
        }
        if (t.includes("kontak") || t.includes("hubungi") || t.includes("email")) {
            return "Kamu bisa lihat semua kontak di halaman Contact ya!";
        }
        if (t.includes("halo") || t.includes("hai") || t.includes("hi")) {
            return "Halo juga! Ada yang mau ditanyain seputar coding?";
        }
        return "Maaf, aku belum ngerti pertanyaan itu. Coba tanya soal Java, JavaScript, C++, Python, atau cara mulai belajar coding ya!";
    }

    function handleSend() {
        const text = chatInput.value.trim();
        if (text === "") return;
        addMessage(text, "user");
        chatInput.value = "";

        setTimeout(() => {
            const reply = getBotReply(text);
            addMessage(reply, "bot");
        }, 400);
    }

    sendChat.addEventListener("click", handleSend);
    chatInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") handleSend();
    });
}