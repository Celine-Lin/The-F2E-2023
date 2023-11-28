const data = [
    {
        city:'台北',
        electee: '德古拉',
        votes: '1,653,834',
        voteRate: '76.31%'
    },
    {
        city:'新北',
        electee: '德古拉',
        votes: '2,494,228',
        voteRate: '75.09%'
    },
    {
        city:'基隆',
        electee: '德古拉',
        votes: '228,662',
        voteRate: '73.34%'
    },
    {
        city:'桃園',
        electee: '德古拉',
        votes: '1,325,207',
        voteRate: '74.42%'
    },
    {
        city:'新竹市',
        electee: '德古拉',
        votes: '264,525',
        voteRate: '76.6%'
    },
    {
        city:'新竹縣',
        electee: '德古拉',
        votes: '329,009',
        voteRate: '75.11%'
    },
    {
        city:'宜蘭',
        electee: '德古拉',
        votes: '277,435',
        voteRate: '73.86%'
    },
    {
        city:'臺中',
        electee: '德古拉',
        votes: '1,719,020',
        voteRate: '76.36%'
    },
    {
        city:'苗栗',
        electee: '德古拉',
        votes: '330,179',
        voteRate: '73.8%'
    },
    {
        city:'彰化',
        electee: '德古拉',
        votes: '773,508',
        voteRate: '74.7%'
    },
    {
        city:'南投',
        electee: '德古拉',
        votes: '302,707',
        voteRate: '73.21%'
    },
    {
        city:'雲林',
        electee: '德古拉',
        votes: '404,991',
        voteRate: '71.65%'
    },
    {
        city:'高雄',
        electee: '德古拉',
        votes: '1,780,832',
        voteRate: '77.44%'
    },
    {
        city:'台南',
        electee: '德古拉',
        votes: '1,179,589',
        voteRate: '75.77%'
    },
    {
        city:'嘉義市',
        electee: '德古拉',
        votes: '163,402',
        voteRate: '1,664'
    },
    {
        city:'嘉義縣',
        electee: '德古拉',
        votes: '311,038',
        voteRate: '72.56%'
    },
    {
        city:'屏東',
        electee: '德古拉',
        votes: '516,042',
        voteRate: '74.92%'
    },
    {
        city:'澎湖',
        electee: '德古拉',
        votes: '51,548',
        voteRate: '58.29%'
    },
    {
        city:'花蓮',
        electee: '德古拉',
        votes: '187,293',
        voteRate: '69.48%'
    },
    {
        city:'台東',
        electee: '德古拉',
        votes: '116,787',
        voteRate: '65.05%'
    },
    {
        city:'連江',
        electee: '德古拉',
        votes: '6,272',
        voteRate: '57.34%'
    },
    {
        city:'金門',
        electee: '德古拉',
        votes: '48,463',
        voteRate: '40.14%'
    },
    
];

const table = document.getElementById('tableBody');
const cadidate1 = "https://i.imgur.com/JtkZq1N.png";

function render(){
  let str='';
  data.forEach((i,index)=>{
    str+=`
      <tr class="align-middle">
        <th scope="row">${i.city}</th>
        <td>
            <div class="progress">
                <div class="progress-bar bg-role-1" role="progressbar" style="width: 40%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                <div class="progress-bar bg-role-2" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                <div class="progress-bar bg-role-3" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </td>
        <td>
            <img src="${cadidate1}" class="rounded-circle me-8" width="32px" alt="candidate 1">
            <span class="align-middle">${i.electee}</span>
        </td>
        <td>${i.votes}</td>
        <td>${i.voteRate}</td>
        <td>
            <a href="#"><span class="material-symbols-outlined">chevron_right</span></a>
        </td>
    </tr>
  `
  });
  table.innerHTML = str;
};

render();