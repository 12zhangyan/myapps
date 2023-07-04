import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
const Footer: React.FC = () => {
  const defaultMessage = 'zhangyan出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Ant Design Pro',
          title: '编程导航',
          href: 'https://wx.zsxq.com/dweb2/index/group/51122858222824',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/12zhangyan',
          blankTarget: true,
        },
        {
          key: '博客',
          title: 'CSDN',
          href: 'https://blog.csdn.net/qq_56555611?spm=1000.2115.3001.5343',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
