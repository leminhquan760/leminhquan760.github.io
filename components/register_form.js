class RegisterForm extends HTMLElement {
    connectedCallback() {
        const selectedMajor = this.getAttribute("major") || "";

        this.innerHTML = `
            <form id="submit-to-google-sheet" name="submit-to-google-sheet" class="lead-card" aria-label="Đăng ký nhận thông tin">
                <div class="card-head">
                    ĐĂNG KÝ NHẬN THÔNG TIN VỀ<br>
                    HỌC PHÍ, LỘ TRÌNH HỌC TẬP
                </div>

                <label>Họ và tên<span class="req">*</span></label>
                <input type="text" name="Họ và tên" required />

                <label>Số điện thoại<span class="req">*</span></label>
                <input type="text" name="Số điện thoại" required />
                
                <label>Trình độ học vấn hiện tại</label>
                <select name="Trình độ học vấn hiện tại">
                    <option value="" selected>Chọn trình độ</option>
                    <option value="Đã tốt nghiệp Trung cấp">Đã tốt nghiệp Trung cấp</option>
                    <option value="Đã tốt nghiệp Cao đẳng">Đã tốt nghiệp Cao đẳng</option>
                    <option value="Đã tốt nghiệp Đại học">Đã tốt nghiệp Đại học</option>
                </select>

                <label>Ngành học quan tâm</label>
                <select name="Ngành đăng ký">
                    <option value="Chọn ngành" ${selectedMajor === "" ? "selected" : ""}>Chọn ngành</option>
                    <option value="Dược học" ${selectedMajor === "Dược học" ? "selected" : ""}>Dược học</option>
                    <option value="Công nghệ thông tin" ${selectedMajor === "Công nghệ thông tin" ? "selected" : ""}>Công nghệ Thông tin</option>
                    <option value="Công nghệ kỹ thuật Ô tô" ${selectedMajor === "Công nghệ kỹ thuật Ô tô" ? "selected" : ""}>Công nghệ kỹ thuật Ô tô</option>
                    <option value="Công nghệ kỹ thuật Điện - Điện tử" ${selectedMajor === "Công nghệ kỹ thuật Điện - Điện tử" ? "selected" : ""}>Công nghệ kỹ thuật Điện - Điện tử</option>
                    <option value="Kế toán" ${selectedMajor === "Kế toán" ? "selected" : ""}>Kế toán</option>
                    <option value="Quản trị Kinh doanh" ${selectedMajor === "Quản trị Kinh doanh" ? "selected" : ""}>Quản trị Kinh doanh</option>
                    <option value="Quản trị Văn phòng" ${selectedMajor === "Quản trị Văn phòng" ? "selected" : ""}>Quản trị Văn phòng</option>
                    <option value="Luật" ${selectedMajor === "Luật" ? "selected" : ""}>Luật</option>
                    <option value="Quản trị khách sạn" ${selectedMajor === "Quản trị khách sạn" ? "selected" : ""}>Quản trị khách sạn</option>
                    <option value="Việt Nam học" ${selectedMajor === "Việt Nam học" ? "selected" : ""}>Việt Nam học</option>
                    <option value="Ngôn ngữ Anh" ${selectedMajor === "Ngôn ngữ Anh" ? "selected" : ""}>Ngôn ngữ Anh</option>
                </select>


                <label>Gửi câu hỏi cho chúng mình nhé!</label>
                <textarea name="Câu hỏi" rows="4"></textarea>

                <button type="submit">Nhận thông tin chi tiết</button>
            </form>
        `;
    }
}

customElements.define("register-form", RegisterForm);