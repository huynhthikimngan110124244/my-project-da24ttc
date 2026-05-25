// Dữ liệu sản phẩm ban đầu
const productDatabase = [
    { id: 1, name: "Hoa thanh cúc", price: 200000, img: "../assets/images/thanhcuc.jpg", productLink:"detail.html", desc: "Hoa thanh cúc, hay còn được biết đến với tên gọi Cornflower, mang một vẻ đẹp hoang dại, tự nhiên với sắc xanh lam hiếm có và quyến rũ. Loài hoa này thường gắn liền với những cánh đồng cỏ xanh mướt ở châu Âu, tượng trưng cho sự dịu dàng, tinh tế và một tình yêu chân thành, không vụ lợi. Những cánh hoa mỏng manh, xếp tầng tạo nên hình dáng như một chiếc vương miện nhỏ nhắn, mang lại cảm giác nhẹ nhàng và thanh thoát. Thanh cúc không chỉ đẹp khi khoe sắc trên đồng nội mà còn rất được ưa chuộng trong nghệ thuật cắm hoa hiện đại nhờ phong cách đồng quê (rustic) đầy lãng mạn. Đặc biệt, loài hoa này còn được biết đến với công dụng làm dịu mắt và chăm sóc da trong các liệu pháp thảo dược tự nhiên. Màu xanh của thanh cúc mang lại cảm giác tin cậy, bình yên và hy vọng, giúp xua tan những mệt mỏi trong cuộc sống thường nhật. Nếu bạn đang tìm kiếm một loài hoa mang hơi thở của thiên nhiên hoang sơ nhưng vẫn giữ được nét kiều diễm để trang trí góc học tập hay làm việc, thì thanh cúc chính là sự lựa chọn không thể hoàn hảo hơn để làm mới không gian sống của mình." },
    { id: 2, name: "Hoa oải hương", price: 150000, img: "../assets/images/lavender.jpg", productLink:"detail.html", desc: "Hoa Lavender, hay còn gọi là hoa oải hương, từ lâu đã chiếm trọn trái tim của những người yêu hoa bởi sắc tím dịu dàng và hương thơm nồng nàn đặc trưng. Có nguồn gốc từ vùng Địa Trung Hải, loài hoa này không chỉ được yêu thích bởi vẻ đẹp bên ngoài mà còn bởi những công dụng tuyệt vời trong y học và làm đẹp. Lavender tượng trưng cho sự tinh khiết, nhẹ nhàng và sự thủy chung son sắt trong tình yêu đôi lứa. Những cành hoa nhỏ dài với các nụ hoa li ti xếp chồng lên nhau tạo nên một vẻ đẹp mộc mạc nhưng đầy sức hút. Hương thơm của lavender có khả năng làm giảm lo âu, giúp tinh thần thư giãn và cải thiện chất lượng giấc ngủ một cách hiệu quả. Bạn có thể sử dụng lavender tươi để trang trí hoặc phơi khô để làm túi thơm giữ hương trong thời gian dài. Một không gian tràn ngập mùi hương oải hương sẽ mang đến cho bạn cảm giác như đang lạc bước giữa những cánh đồng tím ngắt tại vùng Provence nước Pháp. Đây là món quà tinh tế dành cho những ai yêu thích phong cách sống chậm, mong muốn tìm kiếm sự bình yên và cân bằng giữa cuộc sống hiện đại hối hả." },
    { id: 3, name: "Hoa ly", price: 230000, img: "../assets/images/ly.jpg", productLink:"detail.html", desc: "Hoa ly, với vẻ đẹp thanh cao và hương thơm quyến rũ lan tỏa xa, luôn được coi là nữ hoàng của các loài hoa trong các dịp lễ hội và sự kiện trang trọng. Cánh hoa ly to, dày, uốn cong nhẹ nhàng tạo nên một dáng vẻ vừa mạnh mẽ vừa duyên dáng, biểu tượng cho sự quý phái, thanh khiết và đức hạnh. Trong văn hóa phương Tây, hoa ly trắng thường gắn liền với sự trong trắng và vẻ đẹp thánh thiện, trong khi các loài ly màu sắc khác như vàng hay hồng lại đại diện cho sự ấm no và lòng biết ơn. Điểm ấn tượng nhất của hoa ly chính là độ bền cao và mùi hương đặc trưng không thể nhầm lẫn, có thể làm thơm ngát cả một không gian lớn. Khi bài trí hoa ly trong phòng khách, nó không chỉ tạo điểm nhấn sang trọng mà còn khẳng định phong cách tinh tế của gia chủ. Tuy nhiên, khi cắm hoa cần lưu ý ngắt bỏ nhị để tránh phấn hoa làm bẩn cánh hoa hoặc gây dị ứng. Sở hữu một bình hoa ly tươi thắm chính là cách đơn giản nhất để mang lại không khí tươi mới, đẳng cấp và tràn đầy sức sống cho tổ ấm của bạn mỗi ngày." },
    { id: 4, name: "Hoa tulip", price: 180000, img: "../assets/images/tulip1.jpg", productLink:"detail.html", desc: "Hoa Tulip mang một vẻ đẹp vừa đơn giản vừa kiêu sa, là biểu tượng đặc trưng của đất nước Hà Lan xinh đẹp và sự giàu có, thịnh vượng. Hình dáng của hoa tulip giống như một chiếc chén lộn ngược, ôm trọn những gì tinh túy nhất của đất trời vào lòng. Mỗi màu sắc của tulip lại mang một ý nghĩa riêng biệt, nhưng nhìn chung, chúng đều đại diện cho một tình yêu hoàn hảo và sự thanh khiết trong tâm hồn. Cánh hoa mềm mại, mịn màng như lụa kết hợp với phần thân xanh mướt, thẳng tắp tạo nên một phong thái rất quý tộc và lịch lãm. Trong trang trí hiện đại, tulip thường được cắm trong các bình thủy tinh tối giản để tôn lên đường nét thanh thoát của chúng. Loài hoa này đặc biệt ưa thích khí hậu mát mẻ và mang lại cảm giác tươi mới, dịu dàng cho ngôi nhà của bạn. Khi đặt một bình hoa tulip trên bàn làm việc, nó không chỉ giúp giảm bớt căng thẳng mà còn khơi gợi những ý tưởng mới mẻ. Tulip không đơn thuần là một loài hoa, nó là biểu tượng của sự tinh tế và gu thẩm mỹ đẳng cấp của chủ nhân." },
    { id: 5, name: "Hoa hướng dương", price: 340000, img: "../assets/images/sunflower.jpg", productLink:"detail.html", desc: "Hoa hướng dương là biểu tượng rực rỡ của niềm tin, hy vọng và nguồn năng lượng tích cực trong cuộc sống. Với những cánh hoa vàng óng ánh bao quanh phần nhụy lớn như mặt trời thu nhỏ, loài hoa này luôn mang đến cảm giác ấm áp, vui tươi và tràn đầy sức sống cho bất kỳ không gian nào. Điểm đặc biệt của hướng dương chính là khả năng hướng về phía ánh sáng mặt trời, tượng trưng cho tinh thần kiên định, luôn vươn lên trước mọi khó khăn và thử thách. Trong tình yêu, hoa hướng dương đại diện cho sự thủy chung son sắt, một lòng hướng về người mình yêu thương. Không chỉ sở hữu vẻ đẹp mạnh mẽ và nổi bật, hướng dương còn được yêu thích bởi khả năng tạo điểm nhấn đầy nghệ thuật khi trang trí phòng khách, quán cà phê hoặc không gian làm việc hiện đại. Những bó hoa hướng dương thường mang ý nghĩa chúc thành công, may mắn và khích lệ tinh thần, rất phù hợp để làm quà tặng trong các dịp khai trương, tốt nghiệp hay sinh nhật. Sự hiện diện của một bình hoa hướng dương trong nhà sẽ giúp không gian trở nên bừng sáng, mang lại cảm giác lạc quan và nguồn cảm hứng tích cực mỗi ngày." },
    { id: 6, name: "Hoa cẩm tú cầu", price: 220000, img: "../assets/images/camtu.jpg", productLink:"detail.html", desc: "Hoa cẩm tú cầu nổi bật với những đóa hoa hình cầu lớn được kết hợp từ vô số cánh hoa nhỏ mỏng manh như những cánh bướm. Điểm đặc biệt nhất của loài hoa này chính là khả năng thay đổi màu sắc dựa trên độ pH của đất, từ xanh lam thanh khiết, hồng ngọt ngào đến tím mộng mơ. Chính sự biến hóa kỳ ảo này đã khiến cẩm tú cầu trở thành biểu tượng của sự thay đổi cảm xúc nhưng cũng không kém phần chân thành, sâu sắc. Cẩm tú cầu mang lại vẻ đẹp cổ điển và lãng mạn, gợi nhớ đến những khu vườn châu Âu tĩnh lặng vào buổi sớm mai. Trong trang trí tiệc cưới, đây là loài hoa được ưu tiên hàng đầu vì vẻ ngoài viên mãn, tượng trưng cho hạnh phúc vẹn tròn và sự gắn kết bền chặt. Để giữ cho cẩm tú cầu luôn tươi tắn, bạn cần cung cấp một lượng nước dồi dào hằng ngày vì chúng rất yêu thích sự ẩm ướt. Một bụi cẩm tú cầu nở rộ trước hiên nhà hay một bình hoa đặt tại phòng khách sẽ tạo nên một điểm nhấn nghệ thuật tuyệt vời, khiến bất kỳ ai đi ngang qua cũng phải dừng lại để chiêm ngưỡng vẻ đẹp lộng lẫy của chúng." },
    { id: 7, name: "Hoa linh lan", price: 380000, img: "../assets/images/linhlan.jpg", productLink:"detail.html", desc: "Hoa linh lan, còn được gọi là hoa chuông trắng (Lily of the Valley), là loài hoa mang vẻ đẹp thuần khiết, mong manh và vô cùng quý giá. Những bông hoa nhỏ xíu màu trắng tinh khôi, hình dáng giống như những chiếc chuông nhỏ treo lơ lửng trên cuống hoa xanh mướt, tỏa ra một hương thơm ngọt ngào, tinh tế khó cưỡng. Linh lan tượng trưng cho sự trở về của hạnh phúc và sự thanh cao trong tâm hồn, thường được ưu ái xuất hiện trong bó hoa cầm tay của các cô dâu hoàng gia. Do chỉ nở rộ vào mùa xuân và có thời gian khoe sắc ngắn ngủi, linh lan trở nên cực kỳ đắt đỏ và được săn đón bởi những người sành hoa. Vẻ đẹp của linh lan không nằm ở sự rực rỡ mà ở sự khiêm nhường, tinh khôi và đẳng cấp ngầm định. Hương thơm của nó được ứng dụng rộng rãi trong ngành nước hoa cao cấp, gợi nhắc đến sự tươi mới của buổi sáng đầu xuân. Tuy nhỏ bé, nhưng sức sống và thông điệp về niềm vui mà linh lan mang lại là vô cùng to lớn. Việc sở hữu một nhành linh lan trong nhà được xem là mang lại may mắn và sự bình an cho mọi thành viên trong gia đình bạn." },
    { id: 8, name: "Hoa hồng", price: 390000, img: "../assets/images/rose.jpg", productLink:"detail.html", desc: "Hoa hồng từ lâu đã được mệnh danh là nữ hoàng của các loài hoa nhờ vẻ đẹp quyến rũ, sang trọng cùng hương thơm đầy mê hoặc. Mỗi cánh hoa mềm mại được xếp chồng tinh tế tạo nên hình dáng kiêu sa và đầy nghệ thuật, khiến bất kỳ ai cũng phải rung động khi ngắm nhìn. Hoa hồng không chỉ tượng trưng cho tình yêu mãnh liệt và lãng mạn mà còn đại diện cho sự trân trọng, lòng biết ơn và những cảm xúc chân thành sâu sắc. Tùy theo màu sắc, hoa hồng sẽ mang những ý nghĩa khác nhau như hồng đỏ tượng trưng cho tình yêu nồng cháy, hồng trắng thể hiện sự thuần khiết, còn hồng vàng lại đại diện cho tình bạn và niềm vui. Với vẻ đẹp vượt thời gian, hoa hồng luôn xuất hiện trong những dịp đặc biệt như lễ tình nhân, cầu hôn, sinh nhật hay các buổi tiệc sang trọng. Ngoài việc dùng để trang trí, cánh hoa hồng còn được ứng dụng rộng rãi trong sản xuất tinh dầu, mỹ phẩm và trà thảo mộc nhờ hương thơm thư giãn tự nhiên. Một bó hoa hồng tươi thắm không chỉ giúp không gian thêm phần lãng mạn mà còn thể hiện gu thẩm mỹ tinh tế và đẳng cấp của người sở hữu." }
];

// Hàm hiển thị danh sách
function loadProducts(products) {
    const list = document.getElementById("product-list");
    if (!list) return;
    list.innerHTML = "";
    products.forEach(product => {
        const div = document.createElement("div");
        div.className = "col-sm-6 col-md-4 col-lg-3 g-4";
        div.innerHTML = `
            <div class="card h-100 shadow-sm text-center">
                <img src="${product.img}" class="card-img-top" style="height:200px; object-fit:cover;">
                <div class="card-body">
                    <h5 class="fw-bold">${product.name}</h5>
                    <p class="text-danger fw-bold">${product.price.toLocaleString()} VND</p>
                    <div class="d-flex justify-content-center gap-1">
                        <a href="detail.html?id=${product.id}" class="btn btn-sm btn-success">Xem</a>
                        <button class="btn btn-sm btn-warning" onclick="openEditModal(${product.id})">Sửa</button>
                        <button class="btn btn-sm btn-danger" onclick="deleteProduct(${product.id})">Xóa</button>
                    </div>
                </div>
            </div>`;
        list.appendChild(div);
    });
}

// Logic Mở Modal
function openAddModal() {
    document.getElementById("productForm").reset();
    document.getElementById("edit-id").value = "";
    document.getElementById("modalTitle").innerText = "Thêm sản phẩm mới";
    new bootstrap.Modal(document.getElementById('productModal')).show();
}

function openEditModal(id) {
    const item = productDatabase.find(p => p.id === id);
    if(item) {
        document.getElementById("edit-id").value = item.id;
        document.getElementById("p-name").value = item.name;
        document.getElementById("p-price").value = item.price;
        document.getElementById("p-img").value = item.img;
        document.getElementById("p-desc").value = item.desc;
        document.getElementById("modalTitle").innerText = "Sửa sản phẩm";
        new bootstrap.Modal(document.getElementById('productModal')).show();
    }
}

// Xóa sản phẩm
function deleteProduct(id) {
    if(confirm("Xác nhận xóa?")) {
        const idx = productDatabase.findIndex(p => p.id === id);
        productDatabase.splice(idx, 1);
        loadProducts(productDatabase);
    }
}

// Chạy khi trang Page7 tải xong
document.addEventListener("DOMContentLoaded", () => {
    loadProducts(productDatabase);
    const form = document.getElementById("productForm");
    if(form) {
        form.onsubmit = function(e) {
            e.preventDefault();
            const idVal = document.getElementById("edit-id").value;
            const name = document.getElementById("p-name").value;
            const price = parseInt(document.getElementById("p-price").value);
            const img = document.getElementById("p-img").value || "../assets/images/default.jpg";
            const desc = document.getElementById("p-desc").value;

            if (idVal) {
                const idx = productDatabase.findIndex(p => p.id == idVal);
                productDatabase[idx] = { ...productDatabase[idx], name, price, img, desc };
            } else {
                const newId = productDatabase.length > 0 ? productDatabase[productDatabase.length - 1].id + 1 : 1;
                productDatabase.push({ id: newId, name, price, img, desc, productLink: "detail.html" });
            }
            loadProducts(productDatabase);
            bootstrap.Modal.getInstance(document.getElementById('productModal')).hide();
        };
    }
});