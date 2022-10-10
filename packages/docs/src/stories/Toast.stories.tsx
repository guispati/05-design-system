import { StoryObj, Meta } from '@storybook/react';
import { Toast, ToastProps } from '@spati-ignite-ui/react';

export default {
	title: 'Data Display/Toast',
	component: Toast,
	args: {
		title: 'Agendamento realizado',
		description: 'Quarta-feira, 23 de Outubro às 16h',
		duration: 9999,
	},
} as Meta<ToastProps>;

export const Primary: StoryObj<ToastProps> = {}