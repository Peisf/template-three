import * as echarts from 'echarts';
export default  function() {
  var myChart = echarts.init(document.getElementById('echarts'), 'dark');
  var xdata = []
  var ydata = []
  var ydata2 = []
  var ydata3 = []
  for (var i = 0; i < 30; i++) {
    xdata.push(i + 1 + '')
    ydata.push(20 * Math.random().toFixed(1) + 20)
    ydata2.push(20 * Math.random().toFixed(1) + 40)
    ydata3.push(20 * Math.random().toFixed(1) + 60)
  }

  // 指定图表的配置项和数据
  var option = {
    // 从半透明0.1改为1.0
    backgroundColor: 'rgba(255,255,255,0.0)',
    title: {
      text: '上个月日流量',
      x: 'center',
      y: 'top',
      textStyle: {
        fontSize: 16,
        fontWeight: 'normal',
      }
    },
    xAxis: {
      type: 'category',
      data: xdata,

    },
    yAxis: {
      type: 'value',
    },
    series: [{
      data: ydata,
      type: 'line',
      itemStyle: {
        normal: {
          color: "#cefe56",
          borderWidth: 2,
          areaStyle: {
            //渐变色的设置
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1, [{
                offset: 0,
                color: '#cefe56'
              }, {
                offset: 0.5,
                color: '#6d703d'
              }, {
                offset: 1,
                color: '#4d513a'
              }]
            )
          },
          lineStyle: {
            color: "#cefe56",
            width: 2
          }
        }
      },
    },{
      data: ydata2,
      type: 'line',
      itemStyle: {
        normal: {
            color: "#00ff99",
            borderWidth: 2,
            areaStyle: {
                //渐变色的设置
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00ff99'
                    }, {
                        offset: 0.5,
                        color: '#009944'
                    }, {
                        offset: 1,
                        color: '#4d513a'
                    }]
                )
            },
            lineStyle: {
                color: "#00ff99",
                width: 2
            }
        }
    },
    }]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
}



function 行程() {
  // 基于准备好的dom，初始化echarts实例
  var myChart2 = echarts.init(document.getElementById('echarts3'), 'dark');

  // 指定图表的配置项和数据    数据结构和折线图一样，x轴一个数组  y是一个数组，y轴的数组元素和x轴数组元素一一对应
  var option2 = {
    backgroundColor: 'rgba(255,255,255,0.0)',
    title: {
      text: '每架飞机日行程(单位:万米)',
      x: 'center',
      y: 'top',
      textStyle: {
        fontSize: 16,
        fontWeight: 'normal',
      }
    },
    grid: {
      x: '10%', //相当于距离左边效果:padding-left
      y: '15%', //相当于距离上边效果:padding-top
      bottom: '18%',
      //         containLabel: true
    },

    //弹出标签
    tooltip: {},
    xAxis: {
      // data: ["P-1", "P-2", "P-3", "P-4", "P-5", "P-6"],
      data: [],
      axisLabel: {
        show: true,
        textStyle: {

        },
        interval: 0,
        rotate: -60
      },
    },
    yAxis: {
      axisLabel: {
        show: true,
        textStyle: {

        }
      },
    },
    series: [{
      // color:'#0000ff',
      name: '编号-万米',
      type: 'bar',
      // data: [7.5, 6.3, 4.8, 7.3, 6.4, 5.3],
      data: [],
      markPoint: {
        data: [
          { type: 'max', name: '最大值' },
          { type: 'min', name: '最小值' }
        ]
      },
      markLine: {
        data: [
          { type: 'average', name: '平均值' }
        ]
      }
    }],

  };
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 3; j++) {
      var 粮高 = (15 * Math.random() + 20).toFixed(1);
      var 编号 = "L-" + (i + 1) * (j + 1)
      var 吨位 = 粮高 * 400 / 1000;
      option2.xAxis.data.push(编号)
      option2.series[0].data.push(Math.floor(吨位))
      // myChart2.setOption(option2);
    }
  }

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 6; j++) {
      var 编号 = "P-" + (i + 1) * (j + 1)
      var 粮高 = (4.9 * Math.random() + 3).toFixed(1);
      var 吨位 = 粮高 * 1000 / 1000;
      option2.xAxis.data.push(编号)
      option2.series[0].data.push(Math.floor(吨位))
      // myChart2.setOption(option2);



    }
  }

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 3; j++) {

      var 编号 = "Q-" + (i + 1) * (j + 1)
      var 粮高 = (10.9 * Math.random() + 9).toFixed(1);
      var 吨位 = 粮高 * 400 / 1000;


      option2.xAxis.data.push(编号)
      option2.series[0].data.push(Math.floor(吨位))


    }
  }

  myChart2.setOption(option2);
}




function 故障率() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('echarts6'), 'dark');

  option = {
    backgroundColor: 'rgba(0,0,0,0.0)',
    title: {
      text: '各个系统故障率',
      top: 10,
      left: 10,
      textStyle: {
        fontSize: 16,
        fontWeight: 'normal',
      }
    },
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(0,0,0,0.2)'
    },

    visualMap: {
      top: 'middle',
      right: 10,
      color: ['red', 'yellow'],
      calculable: true
    },
    radar: {
      indicator: [
        { text: '燃油', max: 400 },
        { text: '转子', max: 400 },
        { text: '控制', max: 400 },
        { text: '结构', max: 400 },
        { text: '通信', max: 400 }
      ]
    },
    series: (function () {
      var series = [];
      for (var i = 1; i <= 28; i++) {
        series.push({
          name: '浏览器（数据纯属虚构）',
          type: 'radar',
          symbol: 'none',
          lineStyle: {
            width: 1
          },
          emphasis: {
            areaStyle: {
              color: 'rgba(0,250,0,0.3)'
            }
          },
          data: [{
            value: [
              (40 - i) * 10,
              (38 - i) * 4 + 60,
              i * 5 + 10,
              i * 9,
              i * i / 2
            ],
            name: i + 2000 + ''
          }]
        });
      }
      return series;
    })()
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
}


function 平台() {
  var myChart = echarts.init(document.getElementById('echarts7'), 'dark');

  option = {
    backgroundColor: 'rgba(255,255,255,0.0)',
    title: {
      text: '购票平台',
      textStyle: {
        fontSize: 16,
        fontWeight: 'normal',
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['携程', '飞猪', '穷游', '天巡', '官网'],
      x: 'right',
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      // '携程', '飞猪', '穷游', '天巡', '官网'
      {
        name: '携程',
        type: 'line',
        stack: '总量',
        areaStyle: {},
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: '飞猪',
        type: 'line',
        stack: '总量',
        areaStyle: {},
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: '穷游',
        type: 'line',
        stack: '总量',
        areaStyle: {},
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: '天巡',
        type: 'line',
        stack: '总量',
        areaStyle: {},
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: '官网',
        type: 'line',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'top'
          }
        },
        areaStyle: {},
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
}
