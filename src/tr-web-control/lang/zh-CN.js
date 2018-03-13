//语言文件
system.lang = {
	"name": "zh-CN",
	"system": {
		"title": "Transmission WEB 控制器",
		"status": {
			"connect": "正在连接服务器…",
			"connected": "已连接至服务器",
			"queue": "队列：",
			"queuefinish": "本次队列完成。",
			"notfinal": "未完成……",
			"checked": "已选中 %n 条数据："
		}
	},
	"error": {
		"data-error": "数据错误",
		"data-post-error": "数据提交错误",
		"rename-error": "修改名称失败！"
	},
	"config": {
		"save-path": "保存目录"
	},
	"toolbar": {
		"start": "开始",
		"pause": "暂停",
		"recheck": "校验",
		"start-all": "全部开始",
		"pause-all": "全部暂停",
		"remove": "删除",
		"remove-all": "删除所有",
		"remove-data": "删除任务和数据",
		"add-torrent": "添加种子",
		"attribute": "属性",
		"alt-speed": "限速",
		"system-config": "参数",
		"system-reload": "刷新",
		"about": "关于",
		"reload-time": "自动刷新：",
		"reload-time-unit": "秒/次",
		"autoreload-disabled": "已禁用",
		"autoreload-enabled": "已启用",
		"search-prompt": "搜索本地种子",
		"tracker-replace": "替换 Tracker",
		"queue": "队列",
		"ui-mobile": "移动UI",
		"ui-original": "原版UI",
		"ui-computer": "桌面UI",
		"plugin": "扩展功能/插件",
		"rename": "改名",
		"tip": {
			"start": "重新开始已经选中的种子",
			"pause": "暂停已经选中的种子",
			"recheck": "重新校验已选中的种子",
			"recheck-confirm": "确定要重新校验已选中的种子吗？这可能需要些时间！",
			"start-all": "全部开始",
			"pause-all": "全部暂停",
			"remove": "删除已经选中的任务",
			"delete-all": "删除所有任务（不删除数据）",
			"delete-data": "删除已经选中的种子任务和数据",
			"add-torrent": "添加种子",
			"attribute": "属性",
			"alt-speed": "以系统设置的速度限制上传和下载",
			"system-config": "配置系统参数",
			"system-reload": "刷新当前数据",
			"about": "关于本程序",
			"autoreload-disabled": "禁用自动刷新",
			"autoreload-enabled": "启用自动刷新",
			"tracker-replace": "替换 Tracker",
			"change-download-dir": "变更数据保存目录",
			"ui-mobile": "切换到移动设备界面",
			"ui-original": "切换到原版界面",
			"more-peers": "获取更多Peer",
			"rename": "修改种子文件或目录名称"
		}
	},
	"menus": {
		"queue": {
			"move-top": "队列排到最前",
			"move-up": "队列向上移动",
			"move-down": "队列向下移动",
			"move-bottom": "队列排到最后"
		},
		"plugin": {
			"auto-match-data-folder": "自动匹配数据目录"
		}
	},
	"title": {
		"left": "导航",
		"list": "种子列表",
		"attribute": "当前种子属性",
		"status": "状态"
	},
	"tree": {
		"all": "全部",
		"active": "活动中",
		"paused": "已暂停",
		"downloading": "下载中",
		"sending": "正在做种",
		"error": "错误",
		"warning": "警告",
		"actively": "活动中",
		"check": "正在校验",
		"wait": "等待中",
		"search-result": "搜索结果",
		"status": {
			"loading": "加载中…"
		},
		"statistics": {
			"title": "数据统计",
			"cumulative": "累计",
			"current": "当前会话",
			"uploadedBytes": "已上传：",
			"downloadedBytes": "已下载：",
			"filesAdded": "已添加文件：",
			"sessionCount": "会话次数：",
			"secondsActive": "活动时间："
		},
		"servers": "服务器分布",
		"folders": "数据目录",
		"toolbar": {
			"nav": {
				"folders": "数据目录"
			}
		}
	},
	"statusbar": {
		"downloadspeed": "下载速度：",
		"uploadspeed": "上传速度：",
		"version": "版本："
	},
	"dialog": {
		"torrent-add": {
			"download-dir": "保存目录：",
			"torrent-url": "种子地址：",
			"tip-torrent-url": "注：复制种子链接到列表中，多个种子用“回车”分隔。",
			"autostart": "自动开始：",
			"tip-autostart": "选中时，新添加的种子将自动开始下载（如不选择，则为暂停状态）",
			"set-default-download-dir": "设为默认保存目录",
			"upload-file": "种子文件：",
			"nosource": "没有选择种子或没有输入URL地址",
			"tip-title": "上传文件优先于URL"
		},
		"system-config": {
			"title": "服务器参数设置",
			"tabs": {
				"base": "基本设置",
				"network": "网络传输",
				"limit": "带宽限制",
				"alt-speed": "时段限制",
				"dictionary-folders": "目录字典",
				"more": "额外设置"
			},
			"config-dir": "Transmission 配置文件目录（只读）：",
			"download-dir": "默认保存目录：",
			"download-dir-free-space": "可用空间：",
			"incomplete-dir-enabled": "启用临时目录",
			"cache-size-mb": "磁盘缓存大小：",
			"rename-partial-files": "在未完成的文件名后加上“.part”后缀",
			"start-added-torrents": "自动开始新添加的种子",
			"download-queue-enabled": "启用下载队列，最大同时下载数：",
			"seed-queue-enabled": "启用上传队列，最大同时上传数：",
			"peer-port-random-on-start": "启用随机端口，或使用固定端口：",
			"port-forwarding-enabled": "启用端口转发",
			"test-port": "测试端口",
			"port-is-open-true": "端口可连接",
			"port-is-open-false": "端口不可连接",
			"testing": "测试中...",
			"encryption": "数据传输加密方式：",
			"encryption-type": {
				"required": "必须(required)",
				"preferred": "优先(preferred)",
				"tolerated": "允许(tolerated)"
			},
			"utp-enabled": "启用 µTP(UPnP)",
			"dht-enabled": "启用分布式哈希表(DHT)",
			"lpd-enabled": "启用本地用户发现(LPD)",
			"pex-enabled": "启用用户交换",
			"peer-limit-global": "全局链接数限制为：",
			"peer-limit-per-torrent": "每个种子最大链接数：",
			"speed-limit-down-enabled": "启用最大下载速度限制：",
			"speed-limit-up-enabled": "启用最大上传速度限制：",
			"alt-speed-enabled": "启用备用带宽",
			"alt-speed-down": "最大下载速度限制为：",
			"alt-speed-up": "最大上传速度限制为：",
			"alt-speed-time-enabled": "启用时间段限制",
			"alt-speed-time": "时间：",
			"weekday": {
				"1": "星期一",
				"2": "星期二",
				"3": "星期三",
				"4": "星期四",
				"5": "星期五",
				"6": "星期六",
				"0": "星期天"
			},
			"blocklist-enabled": "启用黑名单列表：",
			"blocklist-size": "可用规则数量：%n",
			"seedRatioLimited": "当种子的分享率达到这个数时，自动停止做种：",
			"queue-stalled-enabled": "当未完成的种子超过这个时间没有收到数据时，自动停止下载：",
			"idle-seeding-limit-enabled": "当种子超过这个时间没有流量时，自动停止做种：",
			"minuets": "分钟",
			"nochange": "参数未改变",
			"saveing": "正在保存...",
			"show-bt-servers": "在『服务器分布』中显示『BT』服务器列表。"
		},
		"public": {
			"button-ok": "确定",
			"button-cancel": "取消",
			"button-reload": "刷新",
			"button-save": "保存",
			"button-close": "关闭",
			"button-update": "更新",
			"button-config": "设置"
		},
		"about": {
			"infos": "程序设计：栽培者<br/>使用帮助：<a href='https://github.com/ronggang/transmission-web-control/wiki/Home-CN'>查看</a><br/>QQ群：723130968 <a target='_blank' href='https://shang.qq.com/wpa/qunwpa?idkey=353d3f247de2b78c071e28a31777022424660c97c9fdd6f25640a4a51c6b9d65' ><img border='0' src='https://pub.idqqimg.com/wpa/images/group.png' alt='Transmission Web Control' title='Transmission Web Control (723130968)'></a>",
			"check-update": "检查更新",
			"home": "项目主页",
			"help": "使用帮助",
			"donate": "打赏",
			"pt-plugin": "PT助手"
		},
		"torrent-remove": {
			"title": "删除种子确认",
			"confirm-text": "确认要删除已选择的种子吗？",
			"remove-data": "同时删除数据",
			"remove-error": "种子删除失败！"
		},
		"torrent-changeDownloadDir": {
			"title": "设置新目录",
			"old-download-dir": "原目录：",
			"new-download-dir": "新目录：",
			"move-data": "同时移动数据（如果不钩选，则从新目录下查找文件）",
			"set-error": "设置目录失败！",
			"recheck-data": "设置完成后重新校验。"
		},
		"system-replaceTracker": {
			"title": "替换 Tracker 地址",
			"old-tracker": "原 Tracker：",
			"new-tracker": "新 Tracker：",
			"tip": "此功能将查找<b>所有种子</b>的 Tracker，如果找到相等的，则替换。",
			"not-found": "未找到符合条件的 Tracker。"
		},
		"auto-match-data-folder": {
			"title": "自动匹配数据目录",
			"torrent-count": "将被操作的种子数量：",
			"folder-count": "目录字典数量：",
			"dictionary": "目录字典",
			"time-begin": "开始时间：",
			"time-now": "当前时间：",
			"status": "状态：",
			"ignore": "忽略这个",
			"working-close-confirm": "系统正在进行目录匹配，确定要终止并关闭吗？",
			"time-interval": "时间间隔（秒）：",
			"work-mode-title": "处理方式：",
			"work-mode": {
				"1": "按种子逐个匹配目录",
				"2": "按目录逐个匹配种子"
			}
		},
		"torrent-rename": {
			"title": "修改种子文件或目录名称",
			"oldname": "原名称",
			"newname": "新名称"
		},
		"torrent-attribute-add-tracker": {
			"title": "增加 Tracker",
			"tip": "每行表示一个Tracker"
		}
	},
	"torrent": {
		"fields": {
			"id": "#",
			"name": "名称",
			"hashString": "HASH",
			"downloadDir": "保存目录",
			"totalSize": "总大小",
			"status": "状态",
			"percentDone": "进度",
			"remainingTime": "剩余时间",
			"addedDate": "添加时间",
			"completeSize": "已完成",
			"rateDownload": "下载速度",
			"rateUpload": "上传速度",
			"leecherCount": "下载|活跃",
			"seederCount": "种子|活跃",
			"uploadedEver": "已上传",
			"uploadRatio": "分享率",
			"queuePosition": "队列",
			"activityDate": "最后活动于"
		},
		"status-text": {
			"0": "已暂停",
			"1": "正在等待校验",
			"2": "正在校验",
			"3": "正在等待下载",
			"4": "下载中",
			"5": "等待做种",
			"6": "做种中"
		},
		"attribute": {
			"tabs": {
				"base": "常规",
				"servers": "服务器",
				"files": "文件",
				"users": "用户",
				"config": "设置"
			},
			"files-fields": {
				"name": "名称",
				"length": "大小",
				"percentDone": "进度",
				"bytesCompleted": "已下载",
				"wanted": "需要下载",
				"priority": "优先级别"
			},
			"servers-fields": {
				"announce": "服务器",
				"announceState": "状态",
				"lastAnnounceResult": "信息",
				"lastAnnounceSucceeded": "已连接",
				"lastAnnounceTime": "更新时间",
				"lastAnnounceTimedOut": "超时",
				"downloadCount": "总下载数",
				"nextAnnounceTime": "下次更新时间"
			},
			"peers-fields": {
				"address": "IP地址",
				"clientName": "客户端",
				"flagStr": "标记",
				"progress": "完成进度",
				"rateToClient": "下载速度",
				"rateToPeer": "上传速度"
			},
			"status": {
				"true": "是",
				"false": "否"
			},
			"priority": {
				"0": "正常",
				"1": "高",
				"-1": "低"
			},
			"label": {
				"name": "名称：",
				"addedDate": "添加时间：",
				"totalSize": "大小：",
				"completeSize": "已完成大小：",
				"leftUntilDone": "剩余：",
				"hashString": "HASH：",
				"downloadDir": "保存目录：",
				"status": "状态：",
				"rateDownload": "下载速度：",
				"rateUpload": "上传速度：",
				"leecherCount": "下载(活跃)：",
				"seederCount": "种子(活跃)：",
				"uploadedEver": "已上传：",
				"uploadRatio": "分享率：",
				"creator": "创建者：",
				"dateCreated": "创建时间：",
				"comment": "描述：",
				"errorString": "错误信息：",
				"downloadLimited": "启用最大下载速度限制：",
				"uploadLimited": "启用最大上传速度限制：",
				"peer-limit": "最大链接数：",
				"seedRatioMode": "当种子的分享率达到这个数时，自动停止做种：",
				"seedIdleMode": "当种子超过这个时间没有流量时，自动停止做种：",
				"doneDate": "完成时间：",
				"seedTime": "做种时间："
			},
			"tip": {
				"button-allow": "下载已选择的文件",
				"button-deny": "忽略已选择的文件",
				"button-priority": "设置优先级别"
			},
			"other": {
				"tracker-remove-confim": "确认要删除这个 Tracker 吗？"
			}
		}
	},
	"torrent-head": {
		"buttons": {
			"autoExpandAttribute": "自动显示种子属性"
		}
	},
	"public": {
		"text-unknown": "未知",
		"text-drop-title": "将文件拖放在该区域内即可添加到 Transmission。",
		"text-nochange": "参数未改变",
		"text-saved": "已保存",
		"text-info": "信息",
		"text-confirm": "确认要这样做吗？",
		"text-browsers-not-support-features": "当前浏览器不支持该功能！",
		"text-download-update": "下载这个更新",
		"text-have-update": "有可用的更新"
	}
};