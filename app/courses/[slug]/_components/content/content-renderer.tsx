import type { Lesson } from "../../types";
import ArticleContent from "./article-content";
import CompletionContent from "./completion-content";
import VideoPlayer from "./video-player";

interface ContentRendererProps {
  lesson: Lesson;
  onToggleComplete?: () => void;
  isCompleted?: boolean;
}

export default function ContentRenderer({
  lesson,
  onToggleComplete,
  isCompleted,
}: ContentRendererProps) {
  if (lesson.type === "completion") {
    return <CompletionContent lesson={lesson} />;
  }

  if (lesson.type === "video") {
    return (
      <VideoPlayer
        lesson={lesson}
        onToggleComplete={onToggleComplete}
        isCompleted={isCompleted}
      />
    );
  }

  return (
    <ArticleContent
      lesson={lesson}
      onToggleComplete={onToggleComplete}
      isCompleted={isCompleted}
    />
  );
}
