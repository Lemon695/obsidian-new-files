import NewFilesPlugin from "../main";
import {Setting} from "obsidian";

export class FileTypeFilterToggleSetting {
	private containerEl: HTMLElement;
	private plugin: NewFilesPlugin;

	constructor({containerEl, plugin}: { containerEl: HTMLElement; plugin: NewFilesPlugin }) {
		this.containerEl = containerEl;
		this.plugin = plugin;
	}

	create(): void {
		new Setting(this.containerEl)
			.setName('启用文件类型筛选')
			.setDesc('开启后可以按文件类型筛选显示最近文件')
			.addToggle((toggle) => {
				toggle
					.setValue(this.plugin.data.enableFileTypeFilter)
					.onChange(async (value) => {
						this.plugin.data.enableFileTypeFilter = value;
						await this.plugin.saveData();
						this.plugin.view.redraw();
					});
			});
	}
}
