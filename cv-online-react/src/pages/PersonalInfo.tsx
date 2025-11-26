import AVT from '../../public/img/AVT.jpg';
import bg from '../../public/img/bg.jpg';

function PersonalInfo(){
return(       
<>
<div className="personal-info">
    <div className="pictures">
        <div className="background ">
            <img src={ bg } alt=""/>
        </div>
        <div className="avatar ">
            <img src={ AVT } alt=""/>
        </div>
    </div>
</div>
<div className="info">
    <div>
        <h3>TRẦN MINH DỮNG</h3>
        <p>Frontend Developer</p>
    </div>
    <div className="info-group">
        <div className="info-header">mục tiêu nghề nghiệp
            <div className="info-body">Tôi mong muốn được làm việc trong một môi trường chuyên nghiệp,
                nơi tôi có thể phát triển kỹ năng và đóng góp vào sự thành công của công ty.
            </div>
        </div>
    </div>
</div>
<div className="info">
    <div className="info-group">
        <div className="info-header">học vấn
            <div className="info-body">Tôi đã tốt nghiệp đại học chuyên ngành Công nghệ thông tin.
                Trong quá trình học tập, tôi đã tích lũy được nhiều kiến thức và kỹ năng quý giá, đặc biệt là trong lĩnh
                vực lập trình và phát triển phần mềm.
            </div>
        </div>
    </div>
</div>
<div className="info">
    <div className="info-group">
        <div className="info-header">liên hệ
            <div className="info-body">Email: example@gmail.com
                <br/>Số điện thoại: 0123456789
            </div>
        </div>
    </div>
</div>  
</>
)
}
export default PersonalInfo