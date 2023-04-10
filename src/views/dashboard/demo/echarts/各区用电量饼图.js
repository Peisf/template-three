import * as echarts from 'echarts';
export default  function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('echarts2'), 'dark');

  // 指定图表的配置项和数据
  var option = {
    backgroundColor: 'rgba(255,255,255,0.0)',
    title: {
      text: '各个区用电量',
      x: 'center',
      y: 'top',
      textStyle: {
        fontSize: 16,
        fontWeight: 'normal',
      }
    },
    // 弹窗显示数据
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [{
      name: '用电量',
      type: 'pie',
      radius: '59%',
      // roseType: 'radius',
      data: [{
        value: 23500,
        name: '海淀区'
      },
      {
        value: 37400,
        name: '东城区'
      },
      {
        value: 17400,
        name: '西城区'
      },
      {
        value: 17400,
        name: '朝阳区'
      },
      {
        value: 31000,
        name: '丰台区'
      },
      {
        value: 17400,
        name: '大兴区'
      },
      {
        value: 17400,
        name: '通州区'
      }
      ],
      // 扇形颜色自定义设置
      color: [
        "rgba( 200, 50,0, 1.0)",
        "rgba( 200, 200,0, 1.0)",
        "rgba(0, 80, 240, 1.0)",
        "rgba(0, 120, 200, 1.0)",
        "rgba(0, 160, 160, 1.0)",
        "rgba(0, 200, 120, 1.0)",
        "rgba(0, 240, 80, 1.0)",

        // "#a430ff",
        // "#2a72eb",
        // "#4cfdf7",
        // "#eff425",


      ],

    }]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
}