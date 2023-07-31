<template>
	<div>
		<div style="width: 1120px;margin: 0 auto;" class="custom_steps" v-for="(item, index) in allSteps" :key="index">
			<div class="mid_steps">
				<el-steps align-center :space="space">
					<el-step
						v-for="(d, i) in item.topSteps"
						icon="el-icon-success"
						:key="i"
						:status="d.state == 1 ? 'finish' : 'process'"
					>
						<div class="step_title" slot="icon" :icon="d.icon">
              <i class="el-icon-success" style="font-size: 25px;"></i>
            </div>
						<div class="step_title" slot="title" :title="d.title">{{ d.title }}</div>
						<div class="step_description" slot="description">{{ d.description }}</div>
					</el-step>
				</el-steps>
				<el-steps
					align-center
					:space="space"
					v-if="item.bottomSteps.length"
					style="justify-content: flex-end;"
				>
					<el-step
						v-for="(d, i) in item.bottomSteps"
						icon="el-icon-success"
						:title="d.title"
						:description="d.description"
						:key="i"
						:status="d.state == 1 ? 'finish' : 'process'"
					>
						<div class="step_title" slot="title" :title="d.title">{{ d.title }}</div>
						<div class="step_description" slot="description">{{ d.description }}</div>
					</el-step>
				</el-steps>
			</div>
			<div class="left_steps">
				<div
					class="circle"
					:class="[item.topSteps[0].state == 1 ? 'finish' : 'process']"
					v-if="index >= 1"
				></div>
			</div>
			<div class="right_steps">
				<div
					class="circle"
					:class="[item.bottomSteps[item.bottomSteps.length - 1].state == 1 ? 'finish' : 'process']"
					v-if="item.bottomSteps.length"
				></div>
			</div>
		</div>
	</div>
</template>
 
<script>
export default {
	name: "CustomStep",
	props: {
		// stepsData: {
		// 	type: Array,
		// 	default() {
		// 		return [];
		// 	},
		// },
	},
	data() {
		return {
      space: 160,
			allSteps: [],
      stepsData: []
		};
	},
	watch: {
		stepsData() {
			this._initStepsData();
		},
	},
  mounted() {
    this._initStepsData();
    this.stepsData = [
      {
        title: '施工负责人确认',
        icon: 'el-icon-upload',
        state: 1
      },
      {
        title: '作业人员指派',
        icon: 'el-icon-upload',
        state: 1
      },
      {
        title: '作业人员确认',
        icon: 'el-icon-upload',
      },
      {
        title: '施工作业技术交底',
        icon: 'el-icon-upload',
      },
      {
        title: '计量器具登记',
        icon: 'el-icon-upload',
      },
      {
        title: '单兵设备登记',
        icon: 'el-icon-upload',
      },
      {
        title: '要点令号登记',
        icon: 'el-icon-upload',
      },
      {
        title: '安全交底及确认',
        icon: 'el-icon-upload'
      },
      {
        title: '工器具入站登记',
        icon: 'el-icon-upload'
      },
      {
        title: '病害巡检',
        icon: 'el-icon-upload'
      },
      {
        title: '病害维护',
        icon: 'el-icon-upload'
      },
      {
        title: '三防门检查',
        icon: 'el-icon-upload'
      },
      {
        title: '检测作业',
        icon: 'el-icon-upload'
      },
      {
        title: '工器具出站清点',
        icon: 'el-icon-upload'
      },
      {
        title: '人员出站核查',
        icon: 'el-icon-upload'
      },
      {
        title: '消点令号登记',
        icon: 'el-icon-upload'
      },
      {
        title: '施工负责人确认',
        icon: 'el-icon-upload'
      },
      {
        title: '作业人员指派',
        icon: 'el-icon-upload'
      },
      {
        title: '作业人员确认',
        icon: 'el-icon-upload'
      },
      {
        title: '施工作业技术交底',
        icon: 'el-icon-upload'
      },
      {
        title: '计量器具登记',
        icon: 'el-icon-upload'
      },
      {
        title: '单兵设备登记',
        icon: 'el-icon-upload'
      },
      {
        title: '要点令号登记',
        icon: 'el-icon-upload'
      },
      {
        title: '安全交底及确认',
        icon: 'el-icon-upload'
      },
      {
        title: '工器具入站登记',
        icon: 'el-icon-upload'
      },
      {
        title: '病害巡检',
        icon: 'el-icon-upload'
      },
      {
        title: '病害维护',
        icon: 'el-icon-upload'
      },
      {
        title: '三防门检查',
        icon: 'el-icon-upload'
      },
      {
        title: '检测作业',
        icon: 'el-icon-upload'
      },
      {
        title: '工器具出站清点',
        icon: 'el-icon-upload'
      },
      {
        title: '人员出站核查',
        icon: 'el-icon-upload'
      },
      {
        title: '消点令号登记',
        icon: 'el-icon-upload'
      }
    ]
  },
	methods: {
		// 初始化数据
		_initStepsData() {
			const stepsData = this.stepsData;
			this.allSteps = [];
			if (stepsData && stepsData.length > 0) {
				let num = Math.ceil(stepsData.length / 14);
				let flagNum = 0;
				for (let index = 0; index < num; index++) {
					flagNum = index * 14;
					this.allSteps.push({
						topSteps: stepsData.slice(index * 14, index * 14 + 7),
						bottomSteps: stepsData.slice(flagNum + 7, flagNum + 14).reverse(),
					});
				}
			}
		},
	},
};
</script>
 
<style lang="less" scoped>
.custom_steps {
	position: relative;
	.step_title {
		max-width: 160px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.left_steps {
		position: absolute;
    top: 0;
    left: 0;
		z-index: 1;
		.circle {
			width: 60px;
			height: 58.5px;
      margin-top: -46px;
			border: 2px solid #c0c4cc;
			border-right: none;
			&.finish {
				border-color: #409eff;
			}
      &.process {
        border-color: #EE921A;
      }
		}
	}
	.right_steps {
		position: absolute;
    top: 0;
    right: 0;
		z-index: 1;
		.circle {
			width: 60px;
			height: 58.5px;
      margin-top: 12px;
			border: 2px solid #c0c4cc;
			border-left: none;
			&.finish {
				border-color: #409eff;
			}
      &.process {
        border-color: #EE921A;
      }
		}
	}
	/deep/.el-step__line {
		background: transparent;
		border: 1px solid;
    height: 0;
		.el-step__line-inner {
			border-width: 0 !important;
		}
	}
	/deep/.el-step {
		position: relative;
		.el-step__head.is-process {
			color: #EE921A;
			border-color: #EE921A;
		}
		.el-step__title.is-process {
			color: #EE921A;
			font-weight: unset;
		}
	}
}
</style>