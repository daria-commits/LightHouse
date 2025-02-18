export default function RenderHtmlContent({
    content,
    className,
  }) {
    return (
      <>
        {content ? (
          <div
            className={
              `html-text [&>p]:whitespace-normal header-btn-blue ${className}` 

            }
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          />
        ) : null}
      </>
    );
  }