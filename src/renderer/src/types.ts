import type { RuleObject } from 'ant-design-vue/es/form/interface';
import type { UploadFile } from 'ant-design-vue/es/upload/interface';
import type { RouteRecordRaw } from 'vue-router';

export interface Rules {
  [key: string]: RuleObject | RuleObject[];
}
export interface MapItem {
  [key: string]: string;
}
export interface Port {
  hwtype: string;
  id?: number | string;
}
interface IdMap {
  [id: string]: string;
}
interface PanelMap {
  [id: string]: Array<Array<Port>>;
}
export interface Panel {
  idmap?: IdMap;
  panelmap?: PanelMap;
}
export interface PanelState {
  idmap: IdMap;
  panelmap: PanelMap;
}
export type FileItem = UploadFile<any>[] | undefined;

export type Payload = { [s: string]: any } | ArrayLike<any>;

export type RouteConfigs = RouteRecordRaw[];
export interface Evt {
  to: { id: string; className: string };
  newIndex?: number;
  pullMode?: string;
  oldIndex?: string | number;
  type?: string;
}
export interface PanelItem {
  string: [];
}

export type PanelArray = Port[][];

export type Data = {
  value: string;
  label: string;
};

export type Options = Data[];

export type Actions = {
  isEdit: boolean;
  isPlus: boolean;
  isDelete: boolean;
  isChange: boolean;
  isCheck: boolean;
  isClose: boolean;
};

type ButtonData = {
  key: string;
  title?: string;
  icon?: any;
  onClick?: () => void;
};

export type DataItem = {
  editData?: ButtonData[];
  confirmData?: ButtonData[];
};
