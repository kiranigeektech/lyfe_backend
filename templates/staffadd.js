let staffadd = `
<tr>
        <td class="p-left p-right" style="padding-top:30px;padding:48px 72px 40px 72px;border-left:1px solid #F3F4F4;border-right:1px solid #F3F4F4;"> 
<p style="font-family: 'Inter', sans-serif;font-weight:400;font-size:18px;line-height:30px;letter-spacing:.1px;color:#495377;margin:0 0 32px;">Welcome to LYFE admin. You can access the role(s) {{roles}}</p>
<div style="text-align:center;">
  <a href={{href}} style="background:#5857E4;border-radius:8px;font-weight:600;font-size:15px;line-height:20px;text-align:center;letter-spacing:-.01em;color:#FFFFFF;text-decoration:none;padding:16px 62px;display:inline-block;margin:0 0 37px;">Admin Url</a>
</div>
<p style="font-family: 'Inter', sans-serif;font-weight:400;font-size:18px;line-height:30px;letter-spacing:.1px;color:#495377;margin:0 0 100px;">Email : {{email}},  Password : {{password}}</p>
</td>
        </tr>`

module.exports = {
    staffadd:staffadd,
  };
  