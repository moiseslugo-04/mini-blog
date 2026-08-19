CREATE TABLE users (
    id UUID PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    username VARCHAR(100) NOT NULL UNIQUE,
    email VARCHAR(250) NOT NULL UNIQUE,
    password_hash VARCHAR(250) NOT NULL,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at  TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE categories(
    id UUID PRIMARY KEY,
    name VARCHAR(250) NOT NULL UNIQUE,
    slug VARCHAR(250) NOT NULL UNIQUE,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at  TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE technologies(
    id UUID PRIMARY KEY,
    name VARCHAR(250) NOT NULL UNIQUE,
    slug VARCHAR(250) NOT NULL UNIQUE,
    icon_url VARCHAR(250) NOT NULL,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at  TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE posts (
    id UUID PRIMARY KEY,
    title VARCHAR(250) NOT NULL UNIQUE,
    slug VARCHAR(250) NOT NULL UNIQUE,
    content TEXT NOT NULL,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at  TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE post_images(
    id UUID PRIMARY KEY ,
    post_id UUID NOT NULL UNIQUE,
    url VARCHAR(250) NOT NULL,
    alt VARCHAR(250) NOT NULL,

    FOREIGN KEY (post_id) REFERENCES posts(id)
);
CREATE TABLE post_categories(
    post_id UUID NOT NULL,
    category_id UUID NOT NULL,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at  TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    
    PRIMARY KEY (post_id,category_id),

    FOREIGN KEY(post_id) REFERENCES posts(id),
    FOREIGN KEY(category_id) REFERENCES categories(id)
);


CREATE TABLE projects(
    id UUID PRIMARY KEY,
    title VARCHAR(250) NOT NULL UNIQUE,
    slug VARCHAR(250) NOT NULL UNIQUE,
    overview TEXT NOT NULL ,
    about TEXT NOT NULL,
    challenge TEXT NOT NULL,
    cover_image_id UUID NULL,
    user_id UUID NOT NULL,
    status VARCHAR(20) NOT NULL DEFAULT 'draft' 
    CHECK (status IN ('draft','published')),
    created_at  TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at  TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY(user_id) REFERENCES users(id)
);
CREATE TABLE project_technologies(
    project_id UUID NOT NULL,
    technology_id UUID NOT NULL,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at  TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    
    PRIMARY KEY (project_id,technology_id),
    FOREIGN KEY(project_id) REFERENCES projects(id),
    FOREIGN KEY(technology_id) REFERENCES technologies(id)
);

CREATE TABLE project_images(
    id UUID PRIMARY KEY,
    url VARCHAR(250) NOT NULL,
    alt VARCHAR(250) NOT NULL,
    project_id UUID NOT NULL ,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at  TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    -- Redundant for uniqueness because id is already PK,
    -- but required to reference (project_id, id) as a composite FK.
    UNIQUE (project_id, id),
    FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
);

ALTER TABLE projects ADD CONSTRAINT fk_composite
FOREIGN KEY (id,cover_image_id) REFERENCES project_images(project_id,id)
