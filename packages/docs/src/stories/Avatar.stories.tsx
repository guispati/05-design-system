import { StoryObj, Meta } from '@storybook/react';
import { Avatar, AvatarProps } from '@spati-ignite-ui/react';

export default {
	title: 'Data display/Avatar',
	component: Avatar,
	args: {
		src: 'https://github.com/guispati.png',
		alt: 'Guilherme Spati',
	},
	argTypes: {
		src: {
			control: {
				type: 'text',
			}
		}
	}
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
	args: {
		src: undefined,
	},
}