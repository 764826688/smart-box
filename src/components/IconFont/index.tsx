import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
  scriptUrl: [require('./iconfont.js')],
});

const IconFontEnhanced = (props: { [key: string]: string; type: string }) => {
  return (
    <IconFont
      {...props}
      type={(props.type || '').replace('icon-', '')}
    ></IconFont>
  );
};

export default IconFontEnhanced;
